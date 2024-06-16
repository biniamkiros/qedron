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
  // const hash = crypto.createHmac('sha256', secret).update(JSON.stringify(req.body)).digest('hex');
  // if (hash == req.headers['Chapa-Signature']) {
  // // Retrieve the request's body
  // const event = req.body;
  // // Do something with event
  // }

  // {
  //   "account_name": "Abebe Bikila",
  //   "account_number": "1000XXXXXXXXXXXX",
  //   "bank_id": "96e41186-29ba-4e30-b013-2ca36d7e7025",
  //   "bank_name": "Commercial Bank of Ethiopia (CBE)",
  //   "currency": "ETB",
  //   "amount": "1.00",
  //   "type": "Payout",
  //   "status": "success",
  //   "reference": "3241342142sabcdfdd",
  //   "chapa_reference" : "3241342142sabcdfdd",
  //   "created_at": "2023-02-02T07:53:28.000000Z"
  // }
  return NextResponse.json({ messsage: "Thanks" }, { status: 200 }); //Response.json({ status: 200 })
}
