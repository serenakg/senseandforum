import { identity } from "@/lib/identity";

export const dynamic = "force-static";

export function GET() {
  return Response.json(identity);
}
