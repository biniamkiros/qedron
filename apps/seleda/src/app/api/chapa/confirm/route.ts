export const dynamic = "force-dynamic"; // defaults to auto
var crypto = require("crypto");
import { NextRequest, NextResponse } from "next/server";
import { requestPayment } from "~/config/chapa.config";
import { env } from "~/env";
import { handleUpdates } from "~/services/telegram";

export async function POST(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  const body = await request.json();
  //   const hash = crypto
  //     .createHmac("sha256", env.secret)
  //     .update(JSON.stringify(body))
  //     .digest("hex");
  //   if (hash == request.headers.get("Chapa-Signature")) {
  const {
    account_name, //: "Abebe Bikila",
    account_number, //: "1000XXXXXXXXXXXX",
    bank_id, //: "96e41186-29ba-4e30-b013-2ca36d7e7025",
    bank_name, //: "Commercial Bank of Ethiopia (CBE)",
    currency, //: "ETB",
    amount, //: "1.00",
    type, //: "Payout",
    status, //: "success",
    reference, //: "3241342142sabcdfdd",
    chapa_reference, //: "3241342142sabcdfdd",
    created_at, //: "2023-02-02T07:53:28.000000Z",
  } = body;
  console.log("🚀 ~ confirm body:", body);
  return NextResponse.json({ messsage: "confirmed" }, { status: 200 });
  //   } else NextResponse.json({ messsage: "error" }, { status: 400 });
}
