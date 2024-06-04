export const dynamic = "force-dynamic"; // defaults to auto

import type { NextApiRequest, NextApiResponse } from "next";
import { PostTochannels, pullTenders } from "~/services/egp"; //

type ResponseData = {
  message: string;
};

export async function GET() {
  const tenders = await PostTochannels();
  return Response.json({ tenders });
}
