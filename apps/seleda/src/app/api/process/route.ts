export const dynamic = "force-dynamic"; // defaults to auto
import { env } from "~/env";
import { processQueue } from "~/services/egp";

type ResponseData = {
  message: string;
};

export async function GET(request: Request) {
  if (env.NODE_ENV === "production") return Response.json([]);
  await processQueue();
  return Response.json({ status: 200 });
}
