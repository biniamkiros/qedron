export const dynamic = "force-dynamic"; // defaults to auto
import { NextRequest, NextResponse } from "next/server";
import { env } from "~/env";
import { handleUpdates } from "~/services/telegram";

const SELEDA_BOT_TOKEN = env.SELEDA_BOT_TOKEN;

export async function POST(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  const { token } = params;
  const update = await request.json();
  if (SELEDA_BOT_TOKEN === token) handleUpdates(update);
  return NextResponse.json({ messsage: "Thanks" }, { status: 200 }); //Response.json({ status: 200 })
}
