export const dynamic = "force-dynamic"; // defaults to auto
var crypto = require("crypto");
import { NextRequest, NextResponse } from "next/server";
import { requestPayment, verifyPayment } from "~/config/chapa.config";
import { env } from "~/env";
import { getUserTags, updateUserSubscription } from "~/services/egp";
import { handleUpdates, notifyAdmin } from "~/services/telegram";

export async function POST(request: NextRequest) {
  const body = await request.json();
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

  const { payment, error } = await verifyPayment(tx_ref);
  if (payment && !error) {
    const { data, status, message } = payment;
    if (status === "success" && data) {
      const { tx_ref } = data;
      if (tx_ref) {
        const transaction = tx_ref.split("-");
        const chatId = transaction[0];
        const duration = transaction[1];

        if (chatId && duration) {
          const today = new Date();
          const endDate = new Date(today.getTime() + duration * 1); //to convert duration to number
          // (1000 * 60 * 60 * 24);
          // notifyAdmin(`payment from ${endDate}`);

          const u = await updateUserSubscription(
            chatId,
            endDate,
            `${amount}  ${currency}`
          );
          // notifyAdmin(`payment from ${u ? u.name : "null"}`);
          return NextResponse.json({ messsage: message }, { status: 200 });
        } else
          return NextResponse.json(
            { messsage: "incomplete data" },
            { status: 400 }
          );
      }
    }
    notifyAdmin(`Payment verification failed ${tx_ref} `);
    return NextResponse.json({ message }, { status: 400 });
  }
  if (!payment && error)
    return NextResponse.json({ messsage: error }, { status: 400 });
  return NextResponse.json({ messsage: "Unknown error" }, { status: 400 });
}
