import { provinces } from "@/data/data";
export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code;
  const data = provinces.find((item) => item.code === code);
  return Response.json({ data });
}
