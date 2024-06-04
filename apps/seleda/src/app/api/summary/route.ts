export const dynamic = "force-dynamic"; // defaults to auto

import type { NextApiRequest, NextApiResponse } from "next";
import { pullTenders } from "~/services/egp"; //
import { sendTenderSummary } from "~/services/jobs";

type ResponseData = {
  message: string;
};

export async function GET() {
  const tenders = await sendTenderSummary();
  return Response.json({});
}