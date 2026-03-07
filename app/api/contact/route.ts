import { Resend } from "resend";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req: Request) {

  const { name, email, subject, message } = await req.json();

  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    return Response.json({ error: "Missing API key" }, { status: 500 });
  }

  const resend = new Resend(apiKey);

  const data = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["oussamahafdoune6@gmail.com"],
    subject,
    html: `
      <h3>New message from portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
  });

  return Response.json(data);
}