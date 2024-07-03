import { districts } from "@/data/data";
export async function GET(request: Request) {
  const parts = request.url.split("/");
  const code = parts[parts.length - 1];
  const data = districts.find((item) => item.code === code);
  return Response.json({ data });
}
