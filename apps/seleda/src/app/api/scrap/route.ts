import type { NextApiRequest, NextApiResponse } from 'next'
import { getEGPActiveTenders, getEGPTenderSummary, scrapAll, upsertEGPTender } from '~/services/egp'//
const TelgramBot = require("node-telegram-bot-api");


type ResponseData = {
  message: string
}
 
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<ResponseData>
// ) {
//     console.log("Ssssssssssssss")
//   res.status(200).json({ message: 'Hello from Next.js!' })
// }

export async function GET(request: Request) {
  const SELEDA_BOT_TOKEN =
  "6971834355:AAEmJnGY1420jIK2FrIEnOV2fdHRVseFHj4"
  const tenders = await scrapAll(); 
  tenders.forEach(tender => {
    upsertEGPTender(tender)
  });
  const options = {
    polling: true, 
    // webHook: {
    //   port: 8443,
    // },
  };

  const bot = new TelgramBot(SELEDA_BOT_TOKEN, options);
  const info = await bot.getWebHookInfo();
  console.log("🚀 ~ Seleda Web Hook Info:", info);
  // bot.on("message", async (msg: { text?: any; reply_to_message?: any; chat?: any; }) => {
  //   const {
  //     chat: { id },
  //   } = msg;
  //   console.log("🚀 ~ bot.on ~ msg:", msg)
    
  // });
  // bot.sendMessage("383604329", "send tender link: ", tenders.length)
  return Response.json({ tenders })
}
