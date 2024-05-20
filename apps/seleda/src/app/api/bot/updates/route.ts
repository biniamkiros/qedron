import { handleUpdates } from "~/services/telegram";

export async function GET(request: Request) {
  handleUpdates(request.body); 
  return Response.json({ status: 200 })
}