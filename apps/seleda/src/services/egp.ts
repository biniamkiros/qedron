import { PrismaClient, Tender } from '@prisma/client'
import { sendTelegram, sendTelegramMarkdown } from './telegram';
import { nullable } from 'zod';
import { format } from "date-fns";
// import { PrismaClient } from '../../../../node_modules/.pnpm/@prisma+client@5.13.0_prisma@5.13.0/node_modules/@prisma/client'
const prisma = new PrismaClient()

export const scrapToday = () => {};
export const scrapWeek = () => {};
export const scrapAll = async () => {
  try{
    let tender = []
    const perPage = 10
    const {total, items} = await getEGPActiveTenders(0, perPage);
    tender.push(...items.map((item: { result: any; })=> item.result))
    const restItems = await getEGPActiveTenders(perPage, total)
    tender.push(...restItems.items.map((item: { result: any; })=> item.result))
    return tender.flat();
  } catch(e){
    console.log("🚀 ~ scrapAll ~ error:", e)
    return [];
  }
};

export const getEGPTenderSummary = async () => {
  const summaryUrl =
    "https://egp.ppa.gov.et/po-gw/cms/api/sourcing/get-tender-summary";
  const res = await getRequest(summaryUrl);
  console.log("🚀 ~ getEGPTenderSummary ~ res:", res);
  return res;
};

export const getEGPActiveTenders = async (skip = 0, top = 10) => {
  const scrapActiveUrl = `https://production.egp.gov.et/po-gw/cms/api/sourcing/get-grouped-sourcing?type=all&skip=${skip}&top=${top}&locale=en&orderBy%5B0%5D.field=invitationDate&orderBy%5B0%5D.direction=desc`
  const scrapActiveUrl2 = `https://egp.ppa.gov.et/po-gw/cms/api/sourcing/get-grouped-sourcing?type=all&skip=${skip}&top=${top}&locale=en&orderBy%5B0%5D.field=invitationDate&orderBy%5B0%5D.direction=desc`;
  const activePage = await getRequest(scrapActiveUrl);
  return activePage;
};

export const getRequest = async (url:string) => {
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
          result.forEach((r: { id: any; lotName: any; lotDescription: any; submissionDeadline: any; invitationDate: any; status: any; procuringEntity: any; lotId: any; language: any; marketPlace: any; }) => {
            upsertEGPTender(r);
          });
        } 
      }
    });
  } 
};

export const upsertEGPTender = async (r: { id: any; lotName: any; lotDescription: any; submissionDeadline: any; invitationDate: any; status: any; procuringEntity: any; lotId: any; language: any; marketPlace: any; }) => {
  const raw = {
    egpId: r.id,
      title: r.lotName|| "",
      description: r.lotDescription|| "",
      openingDate: r.submissionDeadline || "",
      closingDate: r.invitationDate || "",
      sources: ["egp"],
      status: r.status || "",
      entity: r.procuringEntity|| "",
      link: `https://egp.ppa.gov.et/egp/bids/all/tendering/${r.lotId}/open`,
      language: r.language|| "",
      region: r.marketPlace|| "",
  }
  const upsertTender = await prisma.tender.upsert({
    where: {
      egpId: r.id,
    },
    update: {
      ...raw
    },
    create: {
      ...raw
    },
  })
  const bidders = await prisma.user.findMany();
  bidders.forEach(bidder => {
    bidder.tags.forEach(async (t)=> {
      let rep = upsertTender.title + " "; 
      rep += upsertTender.description +" ";
      if(rep.toLowerCase().includes(t.toLocaleLowerCase()))  {  
       
        const queue = await prisma.message.findUnique({
          where: {
            messageId: { userId: bidder.id, tenderId: upsertTender.id},
          }
        })
        if(!queue){
          console.log("**********************")
          console.log("Creating message......")
          console.log("**********************")
          const upsertMessage = await prisma.message.create({
            data: {
              userId: bidder.id,
              tenderId: upsertTender.id,
              status: "active",
              sentCount: 3,
            }
        })} else {
          console.log("**********************")
          console.log("Skip. existing message......")
          console.log("**********************")
        }
      }
      
    })
  });

};

export const processQueue = async () => {
  const queue = await prisma.message.findFirst({ where: { status: "active" }, orderBy: { createdAt: 'asc', },});
  if (!queue) {
    console.log("🚀 ~ processQueue ~ no queue available!")
    return;
  }
  const user = await prisma.user.findUnique({ where: { id: queue.userId, },});
  const tender = await prisma.tender.findUnique({ where: { id: queue.tenderId, },});
  if(user && tender && queue) {
    const success = await sendTenderWithHelp(user.chatId, tender);
    if(success){
      // queue.sentCount += 1
      // queue.status = "sent"
      prisma.message.update({where:{id: queue.id}, data:{...queue}})
    }
  }
};

export const sendTenderWithHelp = (chatId:number, tender:Tender):Promise<boolean> => {
  let message = getTenderDetails(tender)
  // message += "\n"
  // message += "Don't miss out. Get all tenders from @SeledaGramBot"
  // console.log("🚀 ~ sendTenderWithHelp ~ message:", message)
  return sendTelegramMarkdown(chatId, message);
};

export const getTenderMessage = (tender:Tender) => {
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

export const getTenderDetails = (tender:Tender) => {
  let details = "Tender id `";
  details += tender.id ? getTruncatedMarkdownString(tender.id) : "???";
  details += "`\n\n";
  details += "***";
  details += tender.title
    ? getTruncatedMarkdownString(tender.title, 100)
    : "no title";
  details += "***\n";
  details +=
    tender.description === null
      ? "no description: 🚫"
      : getTruncatedMarkdownString(tender.description, 300);
  details += "\n\n";
  details += getTruncatedMarkdownString(tender.link, 100);
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
  details +="\n"
  details += "\n```Details";
  details += "\nStatus: ";
  details +=
    tender.status === null
      ? "unknown status"
      : getTruncatedMarkdownString(tender.status);
  // details += "\n";
  details += "\nEntity: ";
  details += getTruncatedMarkdownString(tender.entity, 100);
  // details +=
  //   tender.language === null
  //     ? "no lang"
  //     : getTruncatedMarkdownString(tender.language);
  details += "\nsource: ";
  details +=
    tender.sources.length === 0
      ? "unknown"
      : getTruncatedMarkdownString(tender.sources.toString());
  // details += "\n";
  // details +=
  //   tender.region === null
  //     ? "no region"
  //     : getTruncatedMarkdownString(tender.region);
  details += "```";
  return details;
};

export const setTag = async (chatId:number, tags:string[]) => {
  const user = await prisma.user.update({ where: { chatId: chatId }, data: { tags: tags } } );
  return user
};

export const upsertUser = async (name:string, chatId:number, username:string) => {
  const user = await prisma.user.findUnique({where:{chatId:chatId}})
  if(user){
    const updatedUser = await prisma.user.update({where:{chatId:chatId}, data:{name:name, username:username}})
    return updatedUser
  } 
  else{
    const newUser = await prisma.user.create({ 
      data: { 
        chatId: chatId, 
        name: name, 
        username: username,
      }})
    return newUser
  }   
};

export const getTruncatedMarkdownString = (str:string, maxLength:number = 100) => {
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
  
export const formattedDate = (dateStr:string, formatString = "EEE MMM do, yy") => {
    var date = new Date(dateStr);
  
    try {
      var formattedDate = format(date, formatString);
      return formattedDate;
    } catch (e) {
      console.log("🚀 ~ file: dateUtil.js:51 ~ formattedDate ~ e:", e);
      return "error date"
    }
};
  
