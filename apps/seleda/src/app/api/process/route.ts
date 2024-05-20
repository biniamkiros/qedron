import { processQueue } from "~/services/egp"

type ResponseData = {
  message: string
}

export async function GET(request: Request) {
  await processQueue()
  return Response.json({ status: 200 }) 
}
