import { wards } from "@/data/data";
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const parentCode = searchParams.get("parentCode");
  let data = wards;
  if (parentCode) data = data.filter((item) => item.parentCode === parentCode);
  return Response.json({ data });
}
