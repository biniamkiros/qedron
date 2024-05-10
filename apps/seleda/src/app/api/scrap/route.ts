import type { NextApiRequest, NextApiResponse } from 'next'
import { getEGPActiveTenders, getEGPTenderSummary, scrapAll } from '~/services/egp'
 
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
  const tenders = await scrapAll(); 
  return Response.json({ tenders })
}
