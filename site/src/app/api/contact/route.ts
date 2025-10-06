import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const form = await req.formData();
  const name = String(form.get("name") || "");
  const email = String(form.get("email") || "");
  const subject = String(form.get("subject") || "");
  const message = String(form.get("message") || "");

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  // TODO: integrate email provider or ticketing system
  console.log("Contact form submission", { name, email, subject, message });

  return NextResponse.json({ ok: true });
}
