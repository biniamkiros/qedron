import { env } from "~/env";

const PUBLIC_KEY = "CHAPUBK_TEST-cUIpL7Da4wXkXiwQEt73OBwJLTErdyNz";
const ENCRYPTION_KEY = "VXQNbFYsgPIVCydQ6kv1j603";

var myHeaders = new Headers();
myHeaders.append("Authorization", "Bearer " + env.SELEDA_CHAPA_KEY);
console.log("🚀 ~ env:", env.SELEDA_CHAPA_KEY);
myHeaders.append("Content-Type", "application/json");

//return data.checkout_url
export const requestPayment = async (
  amount: any,
  currency: any,
  email: any,
  firstName: any,
  lastName: any,
  phoneNumber: any,
  ref: any,
  callbackUrl: any,
  returnUrl: any,
  title: any,
  description: any
) => {
  var raw = JSON.stringify({
    amount: amount,
    currency: currency,
    email: email,
    first_name: firstName,
    last_name: lastName,
    phone_number: phoneNumber,
    tx_ref: ref,
    callback_url: callbackUrl,
    return_url: returnUrl,
    "customization[title]": title,
    "customization[description]": description,
  });

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  return fetch("https://api.chapa.co/v1/transaction/initialize", requestOptions)
    .then((response) => response.json())
    .then((result) => {
      console.log("🚀 ~ .Chapa ~ result:", result);
      return { payment: result, error: null };
    })
    .catch((error) => {
      console.log("error", error);
      return { payment: null, error: error };
    });
};
