import { PrismaClient, User, Tender, Message } from "@prisma/client";
import {
  notifyAdmin,
  sendTelegram,
  sendTelegramMarkdown,
  sendUsernameOptions,
  sendUsernameReplyOptions,
} from "./telegram";
import { nullable, object } from "zod";
import { format } from "date-fns";
import { env } from "~/env";
// import { PrismaClient } from '../../../../node_modules/.pnpm/@prisma+client@5.13.0_prisma@5.13.0/node_modules/@prisma/client'
const prisma = new PrismaClient();

const openLink = "ሙሉ መረጃ";
const Purchasing = "ፕሮፎርማ";

export const getSpace = (text: string, max: number) => {
  let space = new Array(max).join(" ");

  if (text.length > max) return "";
  else return space.substring(0, max - text.length);
};

export const sendSummary = async () => {
  const summaryUrl =
    "https://production.egp.gov.et/po-gw/cms/api/sourcing/get-tender-summary";
  const summary = await getRequest(summaryUrl);
  const total = formatNumber(summary.totalActive);
  const publishedToday = formatNumber(summary.publishedToday);
  const openingToday = formatNumber(summary.openingToday);
  const closingToday = formatNumber(summary.closingToday);
  const signedContract = formatNumber(summary.signedContract);
  const evaluationTender = formatNumber(summary.evaluationTender);
  const canceledTender = formatNumber(summary.canceledTender);
  const awardedTender = formatNumber(summary.awardedTender);
  const totalTendersPublished = formatNumber(summary.totalTendersPublished);
  const registeredSupplier = formatNumber(summary.registeredSupplier);

  const message = `>የዛሬ ጨረታ ማጠቃለያ ይህን ይመስላል።**
  
ክፍት ጨረታዎች፡ ${total}${getSpace(total, 8)}   ዛሬ የታተሙ: ${publishedToday}
   ዛሬ የሚከፈቱ: ${openingToday}${getSpace(openingToday, 18)}   ዛሬ የሚዘጉ: ${closingToday}

ስምምነት የፈጸሙ: ${signedContract}${getSpace(signedContract, 18)} ምዘና ላይ ያሉ: ${evaluationTender}
       የተሰረዙ: ${canceledTender}${getSpace(canceledTender, 18)}ለአሸናፊ የተሰጡ: ${awardedTender}

እስከዛሬ አጠቃላይ 
 የታተሙ ጨረታዎች: ${totalTendersPublished}
የተመዘገቡ አቅራቢዎች: ${registeredSupplier}`;

  // console.log("🚀 ~ sendSummary ~ message:\n", message);

  if (env.NODE_ENV === "production") {
    const users = await prisma.user.findMany({ where: { status: "active" } });
    users.forEach(async (u) => {
      const notification = await prisma.notification.create({
        data: {
          userId: u.id,
          message: message,
        },
      });
    });
  } else {
    const user = await prisma.user.findUnique({ where: { chatId: 383604329 } });
    if (user) {
      const notification = await prisma.notification.create({
        data: {
          userId: user.id,
          message: message,
        },
      });
    }
  }
  return summary;
};

export const PostTochannels = async () => {
  const tenders = await getRecentTenders(1000 * 60 * 60 * 12);
  const count = tenders.length;
  if (count > 1) {
    // && env.NODE_ENV === "production") {
    const tender = tenders[Math.floor(Math.random() * tenders.length)];
    const mainChannel =
      env.NODE_ENV === "production" ? "@qedron" : "@qedron_dev";
    const mainGroup =
      env.NODE_ENV === "production" ? "@qedron_chat" : "@qedron_chat_dev"; ///25 /-1001945901536;
    const messageId = env.NODE_ENV === "production" ? 25 : 2;
    const text = `እና ሌሎች አዲስ ${count - 1} ጨረታዎች`;
    const url = "https://t.me/SeledaGramBot";
    if (tender) {
      const message = getTenderForChannelPost(tender);
      // channelIds.forEach((id) => {
      try {
        sendUsernameOptions(mainChannel, message, {
          parse_mode: "MarkdownV2",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: text,
                  url: url,
                },
              ],
            ],
          },
        });
        sendUsernameReplyOptions(mainGroup, message, {
          reply_to_message_id: messageId,
          parse_mode: "MarkdownV2",
          reply_markup: {
            inline_keyboard: [
              [
                {
                  text: text,
                  url: url,
                },
              ],
            ],
          },
        });
      } catch (e) {
        console.log("🚀 ~ Error posting to channel:", mainChannel);
        console.log("🚀 ~ Error posting to channel:", mainGroup);
      }
      // });
    }
  }
  return tenders;
};

export const pullTenders = async () => {
  const tenders = await scrapAll();
  tenders.forEach((tender) => {
    upsertEGPTender(tender);
  });
  notifyAdmin(`Seleda is updating ${tenders.length} tenders`);
  return tenders;
};

export const getRecentTenders = async (window: number) => {
  const dateTime = new Date(Date.now() - window);
  const tenders = await prisma.tender.findMany({
    where: { createdAt: { gte: dateTime } },
  });
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

export const getPackageDetails = async (r: {
  sourceId: any;
  id?: any;
  lotName?: any;
  lotDescription?: any;
  submissionDeadline?: any;
  invitationDate?: any;
  status?: any;
  procuringEntity?: any;
  lotId?: any;
  sourceApplication: any;
  language?: any;
  marketPlace?: any;
}) => {
  if (r.sourceApplication === "Tendering") {
    const link = `https://production.egp.gov.et/egp/bids/all/tendering/${r.lotId}/open`;
    const packageURL = `https://production.egp.gov.et/po-gw/tendering-int/api/packages/get-public-packages-by-id/${r.lotId}`;
    const packageDetails = await getRequest(packageURL);

    const bidSecurityAmount =
      packageDetails?.eligibilityRequirements?.bidSecurityAmount;
    const amount = bidSecurityAmount?.amount;
    const currency = bidSecurityAmount?.currency;
    const security = isValueNumber(amount, true)
      ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
        " " +
        (currency ? currency : "ETB")
      : "xx,xxx.xx ETB";
    const { status } = packageDetails;

    return { status, security, link };
  } else if (r.sourceApplication === "Purchasing") {
    const purchasingURL = `https://production.egp.gov.et/po-gw/purchasing-quotation-invitations/api/get-quotation-invitation/${r.sourceId}`;

    const result = await getRequest(purchasingURL);

    const link = `https://production.egp.gov.et/egp/bids/all/purchasing/${result.id}/open`;

    const bidSecurityAmount = result?.lotInformation;

    const amount = bidSecurityAmount?.bid_security_amount;
    const currency = bidSecurityAmount?.bid_currency;

    const security = isValueNumber(amount, true)
      ? amount > 0
        ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") +
          " " +
          (currency ? currency : "ETB")
        : Purchasing
      : "xx,xxx.xx ETB";

    const { status } = result;
    return { status, security, link };
  } else {
    return { status: "unknown", security: "unknown", link: "unknown" };
  }
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
              sourceApplication: any;
              sourceId: any;
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
  sourceApplication: any;
  sourceId: any;
}) => {
  try {
    const { status, security, link } = await getPackageDetails(r);
    const raw = {
      egpId: r.id,
      title: r.lotName || "",
      description: r.lotDescription || "",
      openingDate: r.submissionDeadline || "",
      closingDate: r.invitationDate || "",
      sources: ["egp"],
      status: status || "",
      entity: r.procuringEntity || "",
      security: security || "",
      link: link || "",
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
      const bidders = await prisma.user.findMany({
        where: { status: "active" },
      });
      bidders.forEach(async (bidder: User) => {
        const today = new Date();
        if (bidder.activeEndDate && bidder.activeEndDate > today)
          createQueueforUser(bidder, upsertTender, old ? "Updated" : "New");
        else if (
          bidder.lastsubRemindDate &&
          bidder.lastsubRemindDate <
            new Date(today.getTime() - 1000 * 60 * 60 * 24)
        ) {
          const message = `የእርስዎን መስፈርት የሚያሟላ ጨረታ አምልጥዎታል። ምዝገባዎን ለማዘመን ይህን /subscribe ይጫኑ`;
          await prisma.notification.create({
            data: {
              userId: bidder.id,
              message: message,
            },
          });
          await prisma.user.update({
            where: { id: bidder.id },
            data: {
              lastsubRemindDate: new Date(),
            },
          });
        }
      });
    }
  } catch (e) {
    console.log("🚀 ~ upserting tender failed:", r.lotId);
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
    // raw.sources === old.sources &&
    raw.status === old.status &&
    raw.entity === old.entity &&
    raw.security === old.security &&
    raw.link === old.link
    // &&
    // raw.language === old.language &&
    // raw.region === old.region
  );
};

export const getUserTags = async (chatId: number) => {
  const bidder = await prisma.user.findFirst({ where: { chatId: chatId } });
  return bidder ? bidder.tags : [];
};

export const getSampleSubscribers = async (type: string) => {
  // const today = new Date();
  // const aMonth = new Date();
  // const threeMonth = new Date();
  // const yearDate = new Date();
  // const bidders = await prisma.user.findMany({
  //   where: {
  //     activeEndDate: {
  //       lte: new Date("2022-01-30"),
  //       gte: new Date("2022-01-15"),
  //     },
  //   },
  //   take: 3,
  // });
};

export const processRecentTenderForUser = async (chatId: number) => {
  const bidder = await prisma.user.findFirst({ where: { chatId: chatId } });
  const tenders = await getActiveTenders();

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
    if (
      typeof t === "string" &&
      t.length > 0 &&
      rep.toLowerCase().includes(t.toLocaleLowerCase())
    ) {
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

  const tags = queue ? queue.tags.concat([tag]) : [tag];
  // queue ? console.log("🚀 ~ tags:", tags) : null;
  await prisma.message.upsert({
    where: {
      messageId: { userId: bidder.id, tenderId: tender.id },
    },
    update: {
      userId: bidder.id,
      tenderId: tender.id,
      type: type,
      tags: tags,
    },
    create: {
      userId: bidder.id,
      tenderId: tender.id,
      type: type,
      tags: tags,
    },
  });
  // if (!queue) {
  //   await prisma.message.create({
  //     data: {
  //       userId: bidder.id,
  //       tenderId: tender.id,
  //       type: type,
  //       tags: [tag],
  //     },
  //   });
  // } else {
  //   const tags = [...new Set(...queue.tags, tag)];
  //   // tags.push(tag);
  //   await prisma.message.update({
  //     where: { id: queue.id },
  //     data: { tags: tags },
  //   });
  // }
};

//updated last two days
export const getActiveTenders = async (window = 1000 * 60 * 60 * 24 * 2) => {
  const dateTime = new Date(Date.now() - window);
  const tenders = await prisma.tender.findMany({
    // where: { status: { in: ["active", "Published"] } },
    where: { updatedAt: { gte: dateTime } },
  });
  return tenders;
};

export const processQueue = async () => {
  // const hasNotification = await
  await processNotification();
  // if (!hasNotification)
  await processMessage();
};

export const processMessage = async () => {
  const matureQueuesDate = new Date(new Date().getTime() - 1000 * 60);
  let queue = await prisma.message.findFirst({
    where: {
      OR: [{ createdAt: { lte: matureQueuesDate } }, { type: "searched" }],
    },
    orderBy: [{ createdAt: "asc" }, { atempt: "asc" }],
  });
  if (!queue) {
    return;
  }
  const user = await prisma.user.findUnique({
    where: { id: queue.userId },
  });
  const tender = await prisma.tender.findUnique({
    where: { id: queue.tenderId },
  });
  if (user && tender && queue) {
    //only process on prod and for biniam on dev
    let success = false;
    if (env.NODE_ENV === "production" || user.chatId === 383604329) {
      success = await sendTenderWithHelp(user.chatId, tender, queue);
    }
    if (success) {
      try {
        const deleted = await prisma.message.delete({
          where: { id: queue.id },
        });
      } catch (e) {
        console.log("🚀 ~ processQueue ~ error deleting message:", e);
      }
    } else {
      const atempt = queue.atempt + 1;
      const deleted = await prisma.message.update({
        where: { id: queue.id },
        data: { atempt: atempt },
      });
    }
  }
};

export const processNotification = async () => {
  const matureQueuesDate = new Date(new Date().getTime() - 1000 * 60);
  let notification = await prisma.notification.findFirst({
    where: {
      createdAt: { lte: matureQueuesDate },
    },
    orderBy: [{ createdAt: "asc" }, { atempt: "asc" }],
  });

  if (!notification) {
    return false;
  }
  const user = await prisma.user.findUnique({
    where: { id: notification.userId },
  });
  if (user) {
    //only process on prod and for biniam on dev
    let success = false;
    if (env.NODE_ENV === "production" || user.chatId === 383604329) {
      success = await sendTelegramMarkdown(user.chatId, notification.message);
    }

    if (success) {
      try {
        const deleted = await prisma.notification.delete({
          where: { id: notification.id },
        });
      } catch (e) {
        console.log("🚀 ~ process notification ~ error deleting message:", e);
      }
    } else {
      const atempt = notification.atempt + 1;
      const deleted = await prisma.notification.update({
        where: { id: notification.id },
        data: { atempt: atempt },
      });
    }
  }
  return true;
};

export const sendTenderWithHelp = (
  chatId: number,
  tender: Tender,
  queue: Message
): Promise<boolean> => {
  let message = "\\#";
  message += queue.type;
  message += " tender ";
  message += " `";
  message += tender.id
    ? getMarkdownString(getTruncatedString(tender.id))
    : "unknown";
  message += "`\n\n";
  message += "***";
  message += tender.title
    ? getMarkdownString(getTruncatedString(tender.title, 100))
    : "no title";
  message += "***\n";
  if (tender.title !== tender.description) {
    message +=
      tender.description === null
        ? "no description"
        : getMarkdownString(
            getTruncatedString(tender.description.trim(), 1000)
          );
    message += "\n";
  }
  message += " \\-";
  message += tender.status
    ? " " + getMarkdownString(getTruncatedString(tender.status))
    : "";
  message += " by ";
  message += getMarkdownString(getTruncatedString(tender.entity, 100));
  message += "\n\n💵 ";
  if (tender.security)
    message += getMarkdownString(getTruncatedString(tender.security));
  message += "    ";
  message +=
    tender.openingDate === null
      ? "unknown opening date"
      : formattedDate(tender.openingDate);
  message += " \\- ";
  message +=
    tender.closingDate === null
      ? "unknown closing date"
      : formattedDate(tender.closingDate);
  message += "\n\n";
  message += `[${openLink}](`;
  message += getMarkdownString(getTruncatedString(tender.link, 100));
  message += ")";
  message += "\n\n";
  message +=
    ">tags: " +
    getMarkdownString(getTruncatedString(queue.tags.join(", "))) +
    "**";

  return sendTelegramMarkdown(chatId, message);
};

export const getTenderDetails = (tender: Tender) => {
  let details = "";

  details += "\n\n";
  details += "***";
  details += tender.title
    ? getMarkdownString(getTruncatedString(tender.title, 100))
    : "no title";
  details += "***\n";
  if (tender.title !== tender.description) {
    details +=
      tender.description === null
        ? "no description"
        : getMarkdownString(getTruncatedString(tender.description, 300));
    details += "\n";
  }
  details += "\n";

  details += "\\- ";
  details += getMarkdownString(getTruncatedString(tender.entity, 100));

  details += "\n";
  details += "\n";
  details +=
    tender.openingDate === null
      ? "unknown opening date"
      : formattedDate(tender.openingDate);
  details += " - "; //\\
  details +=
    tender.closingDate === null
      ? "unknown closing date"
      : formattedDate(tender.closingDate);
  details += "\n\n💵 ";
  if (tender.security)
    details += getMarkdownString(getTruncatedString(tender.security));
  details += "\n\n";
  details += `[${openLink}](`;
  details += getMarkdownString(getTruncatedString(tender.link, 100));
  details += ")";
  details += "\n";

  return details;
};

export const getTenderForChannelPost = (tender: Tender) => {
  let message = "\\#ጨረታ ከ";
  message += " @SeledaGramBot";
  message += "\ntender ";
  message += " `";
  message += tender.id
    ? getMarkdownString(getTruncatedString(tender.id))
    : "unknown";
  message += "`\n\n";
  message += "***";
  message += tender.title
    ? getMarkdownString(getTruncatedString(tender.title, 100))
    : "no title";
  message += "***\n";
  if (tender.title !== tender.description) {
    message +=
      tender.description === null
        ? "no description"
        : getMarkdownString(
            getTruncatedString(tender.description.trim(), 1000)
          );
    message += "\n";
  }
  message += " \\-";
  message += tender.status
    ? " " + getMarkdownString(getTruncatedString(tender.status))
    : "";
  message += " by ";
  message += getMarkdownString(getTruncatedString(tender.entity, 100));
  message += "\n\n💵 ";
  if (tender.security)
    message += getMarkdownString(getTruncatedString(tender.security));
  message += "    ";
  message +=
    tender.openingDate === null
      ? "unknown opening date"
      : formattedDate(tender.openingDate);
  message += " \\- ";
  message +=
    tender.closingDate === null
      ? "unknown closing date"
      : formattedDate(tender.closingDate);
  message += "\n\n";
  message += `[${openLink}](`;
  message += getMarkdownString(getTruncatedString(tender.link, 100));
  message += ")";
  message += "\n\n";
  // message +=
  //   ">tags: " +
  //   getMarkdownString(getTruncatedString(queue.tags.join(", "))) +
  //   "**";
  return message;
};

export const setTag = async (chatId: number, tags: string[]) => {
  const user = await prisma.user.update({
    where: { chatId: chatId },
    data: { tags: tags.filter((t) => typeof t === "string" && t.length > 0) },
  });
  const messages = await prisma.message.deleteMany({
    where: { userId: user.id },
  });
  let count = 0;
  const tenders = await getActiveTenders();
  if (tenders && user)
    tenders.forEach((tender: Tender) => {
      user.tags.forEach(async (t: string) => {
        let rep = tender.title + " ";
        rep += tender.description + " ";
        if (
          typeof t === "string" &&
          t.length > 0 &&
          rep.toLowerCase().includes(t.toLocaleLowerCase())
        ) {
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
  username: string,
  status: string
) => {
  const user = await prisma.user.findUnique({ where: { chatId: chatId } });

  if (user) {
    const updatedUser = await prisma.user.update({
      where: { chatId: chatId },
      data: { name: name, username: username, status },
    });
    return updatedUser;
  } else {
    const today = new Date();
    const newUser = await prisma.user.create({
      data: {
        chatId: chatId,
        name: name,
        username: username,
        status: status,
        activeEndDate: new Date(today.getTime() + 1000 * 60 * 60 * 24),
      },
    });
    return newUser;
  }
};

export const updateBlockedUser = async (chatId: number) => {
  const user = await prisma.user.findUnique({ where: { chatId: chatId } });

  if (user) {
    const updatedUser = await prisma.user.update({
      where: { chatId: chatId },
      data: { status: "blocked" },
    });

    notifyAdmin(
      `Seleda blocked by ${updatedUser.username} > ${updatedUser.name}`
    );
    return updatedUser;
  } else {
    return null;
  }
};

export const updateUserSubscription = async (
  chatId: number,
  activeEndDate: Date,
  paymentInfo: string
) => {
  const user = await prisma.user.findUnique({ where: { chatId: chatId } });

  if (user) {
    const updatedUser = await prisma.user.update({
      where: { chatId: chatId },
      data: { activeEndDate: activeEndDate },
    });
    let message = "";
    message += `የሰሌዳግራም አገልግሎት ምዝገባዎ ዘምኗል።`;
    message += `አገልግሎቱ የሚያበቃበት ቀን >${formattedDate(activeEndDate.toDateString())}**`;

    notifyAdmin(`Payment from ${paymentInfo}`);
    sendTelegramMarkdown(chatId, message);
    return updatedUser;
  } else {
    return null;
  }
};

export const getTruncatedString = (str: string, maxLength: number = 1000) => {
  const formattedStr = str
    ? str.length > maxLength
      ? str.substring(0, maxLength) + "..."
      : str
    : "";
  return formattedStr;
};

export const getMarkdownString = (str: string) => {
  return str
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

function isValueNumber(
  value: unknown,
  isAcceptingFloatingPointNumbers: boolean
) {
  if (typeof value !== "number") {
    return false;
  }

  if (!isAcceptingFloatingPointNumbers) {
    return Number.isInteger(value);
  }

  return true;
}

function formatNumber(amount: any): string {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
