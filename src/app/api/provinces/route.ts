import { provinces } from "@/data/data";
export async function GET() {
  console.log(provinces.length);
  return Response.json({ data: provinces });
}
