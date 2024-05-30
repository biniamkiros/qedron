import { PrismaClient, User, Tender, Message } from "@prisma/client";
import { sendTelegram, sendTelegramMarkdown } from "./telegram";
import { nullable, object } from "zod";
import { format } from "date-fns";
import { env } from "process";
import { Old_Standard_TT } from "next/font/google";
// import { PrismaClient } from '../../../../node_modules/.pnpm/@prisma+client@5.13.0_prisma@5.13.0/node_modules/@prisma/client'
const prisma = new PrismaClient();

export const pullTenders = async () => {
  // console.log("🚀 ~ GET ~ tenders...........");
  const tenders = await scrapAll();
  tenders.forEach((tender) => {
    upsertEGPTender(tender);
  });
  // console.log("🚀 ~ Updated and proccessed ", tenders.length, " tenders");
  return tenders;
};

export const scrapAll = async () => {
  try {
    let tender = [];
    const perPage = 10;
    const { total, items } = await getEGPActiveTenders(0, perPage);
    tender.push(...items.map((item: { result: any }) => item.result));
    const restItems = await getEGPActiveTenders(perPage, total);
    tender.push(...restItems.items.map((item: { result: any }) => item.result));
    return tender.flat();
  } catch (e) {
    console.log("🚀 ~ scrapAll ~ error:", e);
    return [];
  }
};

export const getEGPTenderSummary = async () => {
  const summaryUrl =
    "https://egp.ppa.gov.et/po-gw/cms/api/sourcing/get-tender-summary";
  const res = await getRequest(summaryUrl);
  // console.log("🚀 ~ getEGPTenderSummary ~ res:", res);
  return res;
};

export const getEGPActiveTenders = async (skip = 0, top = 10) => {
  const scrapActiveUrl = `https://production.egp.gov.et/po-gw/cms/api/sourcing/get-grouped-sourcing?type=all&skip=${skip}&top=${top}&locale=en&orderBy%5B0%5D.field=invitationDate&orderBy%5B0%5D.direction=desc`;
  const scrapActiveUrl2 = `https://egp.ppa.gov.et/po-gw/cms/api/sourcing/get-grouped-sourcing?type=all&skip=${skip}&top=${top}&locale=en&orderBy%5B0%5D.field=invitationDate&orderBy%5B0%5D.direction=desc`;
  const activePage = await getRequest(scrapActiveUrl);
  return activePage;
};

export const getPackageDetails = async (id: string) => {
  const packageURL = `https://production.egp.gov.et/po-gw/tendering-int/api/packages/get-public-packages-by-id/${id}`;
  const packageDetails = await getRequest(packageURL);
  return packageDetails;
};

export const getRequest = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: "GET", // or 'PUT'
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    return response.json();
    // return result;
  } catch (error) {
    console.error("Error:", error);
    // notifySeledaAdmin("Error scraping egp: " + url + "\n" + error);
    return null;
  }
};

export const createEGPTenders = async (data: any[]) => {
  if (data.length > 0) {
    data.forEach((d) => {
      const { result } = d;
      if (result) {
        if (result.length > 0) {
          result.forEach(
            (r: {
              id: any;
              lotName: any;
              lotDescription: any;
              submissionDeadline: any;
              invitationDate: any;
              status: any;
              procuringEntity: any;
              lotId: any;
              language: any;
              marketPlace: any;
            }) => {
              upsertEGPTender(r);
            }
          );
        }
      }
    });
  }
};

export const upsertEGPTender = async (r: {
  id: any;
  lotName: any;
  lotDescription: any;
  submissionDeadline: any;
  invitationDate: any;
  status: any;
  procuringEntity: any;
  lotId: any;
  language: any;
  marketPlace: any;
}) => {
  const details = await getPackageDetails(r.lotId);
  const bidSecurityAmount = details?.eligibilityRequirements?.bidSecurityAmount;
  const amount = bidSecurityAmount?.amount;
  const currency = bidSecurityAmount?.currency;
  const securityAmount = amount
    ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + " " + currency
      ? currency
      : "ETB"
    : "**** ETB";

  const raw = {
    egpId: r.id,
    title: r.lotName || "",
    description: r.lotDescription || "",
    openingDate: r.submissionDeadline || "",
    closingDate: r.invitationDate || "",
    sources: ["egp"],
    status: details.status || "",
    entity: r.procuringEntity || "",
    security: securityAmount || "",
    link: `https://egp.ppa.gov.et/egp/bids/all/tendering/${r.lotId}/open`,
    language: r.language || "",
    region: r.marketPlace || "",
  };
  const old = await prisma.tender.findUnique({ where: { egpId: r.id } });
  const isChanged = old ? !isSameTender(raw, old) : true;
  if (isChanged) {
    const upsertTender = await prisma.tender.upsert({
      where: {
        egpId: r.id,
      },
      update: {
        ...raw,
      },
      create: {
        ...raw,
      },
    });
    const bidders = await prisma.user.findMany();
    bidders.forEach((bidder: User) => {
      createQueueforUser(bidder, upsertTender, old ? "Updated" : "New");
    });
  }
};

export const isSameTender = (
  raw: {
    egpId: any;
    title?: any;
    description?: any;
    openingDate?: any;
    closingDate?: any;
    sources?: string[];
    status?: any;
    entity?: any;
    security?: any;
    link?: string;
    language?: any;
    region?: any;
  },
  old: Tender
) => {
  return (
    raw.egpId === old.egpId &&
    raw.title === old.title &&
    raw.description === old.description &&
    raw.openingDate === old.openingDate &&
    raw.closingDate === old.closingDate &&
    raw.sources === old.sources &&
    raw.status === old.status &&
    raw.entity === old.entity &&
    raw.security === old.security &&
    raw.link === old.link &&
    raw.language === old.language &&
    raw.region === old.region
  );
};

export const getUserTags = async (chatId: number) => {
  const bidder = await prisma.user.findFirst({ where: { chatId: chatId } });
  return bidder ? bidder.tags : [];
};

export const processRecentTenderForUser = async (chatId: number) => {
  const bidder = await prisma.user.findFirst({ where: { chatId: chatId } });
  const tenders = await getActiveTenders();
  // prisma.tender.findMany({
  //   // where: { createdAt: { gte: new Date(Date.now() - 86400000) } },
  //   where: { status: { in: ["active"] } },
  // });
  if (tenders && bidder)
    tenders.forEach((tender: Tender) => {
      createQueueforUser(bidder, tender, "searched");
    });
};

export const createQueueforUser = async (
  bidder: User,
  tender: Tender,
  type: string
) => {
  bidder.tags.forEach(async (t: string) => {
    let rep = tender.title + " ";
    rep += tender.description + " ";
    if (rep.toLowerCase().includes(t.toLocaleLowerCase())) {
      upsertQueue(t, bidder, tender, type);
    }
  });
};

export const upsertQueue = async (
  tag: string,
  bidder: User,
  tender: Tender,
  type: string
) => {
  const queue = await prisma.message.findUnique({
    where: {
      messageId: { userId: bidder.id, tenderId: tender.id },
    },
  });
  if (!queue) {
    await prisma.message.create({
      data: {
        userId: bidder.id,
        tenderId: tender.id,
        // status: "active",
        type: type,
        tags: [tag],
        // sentCount: 0,
      },
    });
  } else {
    const tags = queue.tags;
    tags.push(tag);
    await prisma.message.update({
      where: { id: queue.id },
      data: { tags: tags },
    });
  }
};

export const getActiveTenders = async () => {
  const tenders = await prisma.tender.findMany({
    // where: { status: { in: ["active", "Published"] } },
  });
  return tenders;
};

export const processQueue = async () => {
  // const queues = await prisma.message.findMany({
  //   where: { status: "active" },
  //   orderBy: { createdAt: "asc" },
  // });
  // where: { status: "active" },
  // let queues = await prisma.message.findMany();
  // console.log("🚀 ~ processQueue ~ queues:", queues);
  let queue = await prisma.message.findFirst({ orderBy: { createdAt: "asc" } });
  if (!queue) {
    return;
  }
  const user = await prisma.user.findUnique({ where: { id: queue.userId } });
  const tender = await prisma.tender.findUnique({
    where: { id: queue.tenderId },
  });
  if (
    user &&
    tender &&
    queue &&
    (env.NODE_ENV === "production" || user.chatId === 383604329)
  ) {
    //only process on prod and for biniam on dev
    const success = await sendTenderWithHelp(user.chatId, tender, queue);
    if (success) {
      const deleted = await prisma.message.delete({ where: { id: queue.id } });
    }
  }
};

export const sendTenderWithHelp = (
  chatId: number,
  tender: Tender,
  queue: Message
): Promise<boolean> => {
  let message = "```";
  message += queue.type;
  message += "\n";
  message += "Tender ";
  message += tender.status
    ? getTruncatedMarkdownString(tender.status)
    : "unkown status";

  message += " : ";
  // message += "`";
  message += tender.id ? getTruncatedMarkdownString(tender.id) : "unknown id";
  // message += "`";
  message += "```\n";
  message += "\n\n";
  message += "***";
  message += tender.title
    ? getTruncatedMarkdownString(tender.title, 100)
    : "no title";
  message += "***\n";
  if (tender.title !== tender.description) {
    message +=
      tender.description === null
        ? "no description"
        : getTruncatedMarkdownString(tender.description, 300);
    message += "\n";
  }
  message += "\n";

  message += "\\- ";
  message += getTruncatedMarkdownString(tender.entity, 100);

  message += "\n";
  message += "\n";
  message +=
    tender.openingDate === null
      ? "unknown opening date"
      : formattedDate(tender.openingDate);
  message += " \\- ";
  message +=
    tender.closingDate === null
      ? "unknown closing date"
      : formattedDate(tender.closingDate);
  message += "\n\n💵 ";
  if (tender.security) message += getTruncatedMarkdownString(tender.security);
  message += "\n\n";
  message += getTruncatedMarkdownString(tender.link, 100);
  message += "\n";
  // message += getTenderDetails(tender);
  message += "\n\n";
  message +=
    ">tags: " + getTruncatedMarkdownString(queue.tags.join(", ")) + "**";
  return sendTelegramMarkdown(chatId, message);
};

export const getTenderMessage = (tender: Tender) => {
  const header = "```Tender```";
  let details = header;
  details += "\n";
  details += "id `";
  details += tender.id ? getTruncatedMarkdownString(tender.id) : "???";
  details += "`\n\n";
  details += "***";
  details += tender.title
    ? getTruncatedMarkdownString(tender.title, 100)
    : "no title";
  details += "***\n\n";
  details +=
    tender.description === null
      ? "no description: 🚫"
      : getTruncatedMarkdownString(tender.description, 300);
  details += "\n\n";
  details += getTruncatedMarkdownString(tender.entity, 100);
  details += "\n";
  details += getTruncatedMarkdownString(tender.link, 100);
  details += "\n";
  details +=
    tender.sources === null
      ? "unknown"
      : getTruncatedMarkdownString(tender.sources.toString());
  details += "\n```Details\n";
  details +=
    tender.openingDate === null
      ? "unknown opening date"
      : formattedDate(tender.openingDate);
  details += " \\- ";
  details +=
    tender.closingDate === null
      ? "unknown closing date"
      : formattedDate(tender.closingDate);
  details += "\n";
  details +=
    tender.status === null
      ? "no status"
      : getTruncatedMarkdownString(tender.status);
  details += "  ";
  details +=
    tender.language === null
      ? "no lang"
      : getTruncatedMarkdownString(tender.language);
  details += "  ";
  details +=
    tender.region === null
      ? "no region"
      : getTruncatedMarkdownString(tender.region);
  details += "```";
  return details;
};

export const getTenderDetails = (tender: Tender) => {
  let details = "";
  // details += "Status: ";
  // details +=
  //   tender.status === null
  //     ? "unknown status"
  //     : getTruncatedMarkdownString(tender.status);
  // details += " > ";
  // details += "Tender ";
  // details += tender.status
  //   ? getTruncatedMarkdownString(tender.status)
  //   : "unknown";
  // details += "id : ";
  // details += "`";
  // details += tender.id
  //   ? getTruncatedMarkdownString(tender.id)
  //   : "????????????????";
  // details += "`";

  // details += "\n";
  // details += "```";
  details += "\n\n";
  details += "***";
  details += tender.title
    ? getTruncatedMarkdownString(tender.title, 100)
    : "no title";
  details += "***\n";
  if (tender.title !== tender.description) {
    details +=
      tender.description === null
        ? "no description"
        : getTruncatedMarkdownString(tender.description, 300);
    details += "\n";
  }
  details += "\n";

  details += "\\- ";
  details += getTruncatedMarkdownString(tender.entity, 100);

  details += "\n";
  details += "\n";
  details +=
    tender.openingDate === null
      ? "unknown opening date"
      : formattedDate(tender.openingDate);
  details += " \\- ";
  details +=
    tender.closingDate === null
      ? "unknown closing date"
      : formattedDate(tender.closingDate);
  details += "\n\n💵 ";
  if (tender.security) details += getTruncatedMarkdownString(tender.security);
  details += "\n\n";
  details += getTruncatedMarkdownString(tender.link, 100);
  details += "\n";
  // details += "\n>Details";
  // details += "\n";

  // details +=
  //   tender.language === null
  //     ? "no lang"
  //     : getTruncatedMarkdownString(tender.language);
  // details += "\nsource: ";
  // details +=
  //   tender.sources.length === 0
  //     ? "unknown"
  //     : getTruncatedMarkdownString(tender.sources.toString());
  // details += "\n";
  // details +=
  //   tender.region === null
  //     ? "no region"
  //     : getTruncatedMarkdownString(tender.region);
  // details += "```";
  // details += "**";
  return details;
};

export const setTag = async (chatId: number, tags: string[]) => {
  const user = await prisma.user.update({
    where: { chatId: chatId },
    data: { tags: tags },
  });
  const messages = await prisma.message.deleteMany({
    where: {
      userId: user.id,
      // status: "active"
    },
    // data: { status: "stale" },
  });
  let count = 0;
  const tenders = await getActiveTenders();
  if (tenders && user)
    tenders.forEach((tender: Tender) => {
      user.tags.forEach(async (t: string) => {
        let rep = tender.title + " ";
        rep += tender.description + " ";
        if (rep.toLowerCase().includes(t.toLocaleLowerCase())) {
          // const queue = await prisma.message.findUnique({
          //   where: {
          //     messageId: { userId: user.id, tenderId: tender.id },
          //   },
          // });
          // // console.log("🚀 ~ user.tags.forEach ~ queue:", queue);
          // if (!queue)
          count += 1;
        }
      });
    });

  return { user, count };
};

export const upsertUser = async (
  name: string,
  chatId: number,
  username: string
) => {
  const user = await prisma.user.findUnique({ where: { chatId: chatId } });
  if (user) {
    const updatedUser = await prisma.user.update({
      where: { chatId: chatId },
      data: { name: name, username: username },
    });
    return updatedUser;
  } else {
    const newUser = await prisma.user.create({
      data: {
        chatId: chatId,
        name: name,
        username: username,
      },
    });
    return newUser;
  }
};

export const getTruncatedMarkdownString = (
  str: string,
  maxLength: number = 1000
) => {
  const formattedStr = str
    ? str.length > maxLength
      ? str.substring(0, maxLength) + "..."
      : str
    : "";
  return formattedStr
    .toString()
    .replace(/\_/g, "\\_")
    .replace(/\*/g, "\\*")
    .replace(/\[/g, "\\[")
    .replace(/\]/g, "\\]")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)")
    .replace(/\~/g, "\\~")
    .replace(/\`/g, "\\`")
    .replace(/\>/g, "\\>")
    .replace(/\#/g, "\\#")
    .replace(/\+/g, "\\+")
    .replace(/\-/g, "\\-")
    .replace(/\=/g, "\\=")
    .replace(/\|/g, "\\|")
    .replace(/\{/g, "\\{")
    .replace(/\}/g, "\\}")
    .replace(/\./g, "\\.")
    .replace(/\!/g, "\\!");
};

export const formattedDate = (
  dateStr: string,
  formatString = "EEE MMM do, yy"
) => {
  var date = new Date(dateStr);

  try {
    var formattedDate = format(date, formatString);
    return formattedDate;
  } catch (e) {
    // console.log("🚀 ~ file: dateUtil.js:51 ~ formattedDate ~ e:", e);
    return "error date";
  }
};
