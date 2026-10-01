import { schema } from "@/lib/schema";

export const dynamic = "force-static";

export function GET() {
  return Response.json(schema);
}
