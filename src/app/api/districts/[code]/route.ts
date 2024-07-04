import { districts } from "@/data/data";
export async function GET(
  request: Request,
  { params }: { params: { code: string } }
) {
  const code = params.code;
  const data = districts.find((item) => item.code === code);
  return Response.json({ data });
}
