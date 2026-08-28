// Placeholder endpoint — validates and accepts the payload but does not
// send email or persist it anywhere. Wire this up to a real inbox or CRM
// before launch.
export async function POST(request) {
  const body = await request.json().catch(() => null);

  if (!body?.name || !body?.email || !body?.message) {
    return Response.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 }
    );
  }

  return Response.json({ ok: true });
}
