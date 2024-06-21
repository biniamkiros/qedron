export const dynamic = "force-dynamic"; // defaults to auto
var crypto = require("crypto");
import { NextRequest, NextResponse } from "next/server";
import { requestPayment } from "~/config/chapa.config";
import { env } from "~/env";
import { handleUpdates, notifyAdmin } from "~/services/telegram";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const hash = crypto
    .createHmac("sha256", env.SELEDA_CHAPA_SECRET_HASH)
    .update(JSON.stringify(request.body))
    .digest("hex");

  const {
    event,
    first_name,
    last_name,
    mobile,
    currency,
    amount,
    charge,
    status,
    mode,
    reference,
    type,
    tx_ref,
    payment_method,
  } = body;

  if (
    hash === request.headers.get("Chapa-Signature") ||
    hash === request.headers.get("x-chapa-signature")
  ) {
    // const v = {
    //   event: "charge.success",
    //   first_name: "ቢኒያም",
    //   last_name: "ኪሮስ",
    //   email: null,
    //   mobile: "251913201724",
    //   currency: "ETB",
    //   amount: "10.00",
    //   charge: "0.35",
    //   status: "success",
    //   mode: "live",
    //   reference: "APIwnXSt2Iuu",
    //   created_at: "2024-06-21T14:45:26.000000Z",
    //   updated_at: "2024-06-21T14:45:34.000000Z",
    //   type: "API",
    //   tx_ref: "383604329-7776000000-K5lvlwjD",
    //   payment_method: "telebirr",
    //   customization: { title: null, description: null, logo: null },
    //   meta: "null",
    // };
    // const {
    //   account_name, //: "Abebe Bikila",
    //   account_number, //: "1000XXXXXXXXXXXX",
    //   bank_id, //: "96e41186-29ba-4e30-b013-2ca36d7e7025",
    //   bank_name, //: "Commercial Bank of Ethiopia (CBE)",
    //   currency, //: "ETB",
    //   amount, //: "1.00",
    //   type, //: "Payout",
    //   status, //: "success",
    //   reference, //: "3241342142sabcdfdd",
    //   chapa_reference, //: "3241342142sabcdfdd",
    //   created_at, //: "2023-02-02T07:53:28.000000Z",
    // } = body;
    // const chatId = reference.slice("-")[0];
    // notifyAdmin(`Payment from ${chatId} ${amount}`);
    notifyAdmin(
      `Success Payment hash ${hash} 
      from ${tx_ref} ${amount} 
      signature: ${request.headers.get("Chapa-Signature")} 
      x-signature: ${request.headers.get("x-chapa-signature")}`
    );
    return NextResponse.json({ messsage: "confirmed" }, { status: 200 });
  } else {
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
    const chatId = reference.slice("-")[0];
    notifyAdmin(
      `Error Payment hash ${hash} 
      from ${tx_ref} ${amount} 
      signature: ${request.headers.get("Chapa-Signature")} 
      x-signature: ${request.headers.get("x-chapa-signature")}`
    );
    NextResponse.json({ messsage: "error" }, { status: 400 });
  }
}
