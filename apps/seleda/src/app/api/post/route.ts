export const dynamic = "force-dynamic"; // defaults to auto

import type { NextApiRequest, NextApiResponse } from "next";
import { env } from "~/env";
import { PostTochannels, pullTenders } from "~/services/egp"; //

type ResponseData = {
  message: string;
};

export async function GET() {
  if (env.NODE_ENV === "production") return Response.json([]);
  const tenders = await PostTochannels();
  return Response.json({ tenders });
}
