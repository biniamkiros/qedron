export const dynamic = 'force-dynamic' // defaults to auto

import type { NextApiRequest, NextApiResponse } from 'next'
import { pullTenders, } from '~/services/egp'//

type ResponseData = {
  message: string 
}

export async function GET() {
 const tenders = await pullTenders()
  return Response.json({ tenders })
}
