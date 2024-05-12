// import { PrismaClient } from '.prisma/client'
// import { PrismaClient } from '../../../../node_modules/.pnpm/@prisma+client@5.13.0_prisma@5.13.0/node_modules/@prisma/client'
// const prisma = new PrismaClient()

export const scrapToday = () => {};
export const scrapWeek = () => {};
export const scrapAll = async () => {
  let tender = []
  const perPage = 10
  const {total, items} = await getEGPActiveTenders(0, perPage);
  tender.push(...items.map((item: { result: any; })=> item.result))
  const restItems = await getEGPActiveTenders(perPage, total)
  tender.push(...restItems.items.map((item: { result: any; })=> item.result))
  return tender.flat();
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

// export const createEGPTenders = async (data: any[]) => {
//   if (data.length > 0) {
//     data.forEach((d) => {
//       const { result } = d;
//       if (result) {
//         if (result.length > 0) {
//           result.forEach((r: { id: any; lotName: any; submissionDeadline: any; invitationDate: any; status: any; procuringEntity: any; lotId: any; language: any; marketPlace: any; }) => {
//             upsertEGPTender(r);
//           });
//         } 
//       }
//     });
//   } 
// };

// export const upsertEGPTender = async (r: { id: string; lotName: any; submissionDeadline: any; invitationDate: any; status: any; procuringEntity: any; lotId: any; language: any; marketPlace: any; }) => {
//   const raw = {
//     egpId: r.id,
//       title: r.lotName|| "",
//       description: r.lotName|| "",
//       openingDate: r.submissionDeadline || "",
//       closingDate: r.invitationDate || "",
//       sources: ["egp"],
//       status: r.status || "",
//       entity: r.procuringEntity|| "",
//       link: `https://egp.ppa.gov.et/egp/bids/all/tendering/${r.lotId}/open`,
//       language: r.language|| "",
//       region: r.marketPlace|| "",
//   }
//   const upsertUser = await prisma.tender.upsert({
//     where: {
//       egpId: r.id,
//     },
//     update: {
//       ...raw
//     },
//     create: {
//       ...raw
//     },
//   })
//   console.log("🚀 ~ upsertEGPTender ~ upsertUser:", upsertUser.egpId)
// };

// const createQueue = async (newTender) => {
//   const bidders = await Bidder.find({ activeEndDate: { $gte: new Date() } });
//   bidders.forEach((bidder) => {
//     if (isTenderRelevant(bidder, newTender)) {
//       const seledaQueue = new SeledaQueue({
//         bidderRef: bidder._id,
//         tenderRef: tender._id,
//         status: "ACTIVE",
//       });
//       seledaQueue.save((err, result) => {
//         if (err && !result) {
//           // notifySeledaAdmin(
//           //   "Error creating seleda queue: ",
//           //   tender.title,
//           //   " for ",
//           //   bidder.name
//           // );
//         }
//       });
//     }
//   });
// };

