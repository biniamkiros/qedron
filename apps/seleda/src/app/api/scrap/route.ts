import type { NextApiRequest, NextApiResponse } from 'next'
import { getEGPActiveTenders, getEGPTenderSummary, scrapAll, upsertEGPTender } from '~/services/egp'//

type ResponseData = {
  message: string 
}

export async function GET(request: Request) {
  console.log("🚀 ~ GET ~ tenders...........")
  const tenders = await scrapAll(); 
  tenders.forEach(tender => {
    upsertEGPTender(tender) 
  });
  console.log("🚀 ~ Updated and proccessed ", tenders.length," tenders")
  return Response.json({ tenders })
}
