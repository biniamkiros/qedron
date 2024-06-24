export const dynamic = "force-dynamic"; // defaults to auto
import { NextRequest, NextResponse } from "next/server";
import { requestPayment } from "~/config/chapa.config";
import { env } from "~/env";
import { handleUpdates } from "~/services/telegram";

export async function POST(
  request: NextRequest,
  { params }: { params: { token: string } }
) {
  const {
    amount,
    currency,
    email,
    first_name,
    last_name,
    phone_number,
    tx_ref,
    callback_url,
    return_url,
    title,
    description,
  } = await request.json();

  const { payment, error } = await requestPayment(
    amount,
    currency,
    email,
    first_name,
    last_name,
    phone_number,
    tx_ref,
    callback_url,
    return_url,
    title,
    description
  );
  if (payment && !error) {
    const { data, status, message } = payment;
    if (status === "success" && data) {
      const { checkout_url } = data;
      if (checkout_url)
        return NextResponse.json(
          { status: status, messsage: message, checkout: checkout_url },
          { status: 200 }
        );
    }
    return NextResponse.json(
      { data, status, message, checkout: null },
      { status: 400 }
    );
  }
  if (!payment && error)
    return NextResponse.json(
      { messsage: error, checkout: null },
      { status: 400 }
    );
  return NextResponse.json(
    { status: "error", messsage: "Unknown error", checkout: null },
    { status: 400 }
  );
}
