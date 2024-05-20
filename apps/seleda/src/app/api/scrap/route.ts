export const dynamic = 'force-dynamic' // defaults to auto

import type { NextApiRequest, NextApiResponse } from 'next'
import { getEGPActiveTenders, getEGPTenderSummary, scrapAll, upsertEGPTender } from '~/services/egp'//

type ResponseData = {
  message: string 
}

export async function GET() {
  console.log("🚀 ~ GET ~ tenders...........")
  const tenders = await scrapAll(); 
  tenders.forEach(tender => {
    upsertEGPTender(tender) 
  });
  console.log("🚀 ~ Updated and proccessed ", tenders.length," tenders")
  return Response.json({ tenders })
}
