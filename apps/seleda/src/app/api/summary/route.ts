export const dynamic = "force-dynamic"; // defaults to auto

import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env";
import { pullTenders, sendSummary } from "~/services/egp"; //
import { sendTenderSummary } from "~/services/jobs";

type ResponseData = {
  message: string;
};

export async function GET() {
  if (env.NODE_ENV === "production") return Response.json([]);
  const summary = await sendSummary();
  return Response.json({ summary });
}
