import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export const dynamic = "force-dynamic";
export const runtime = "nodejs";
export async function POST(req: Request) {

  console.log("API CONTACT CALLED");
  console.log("API KEY:", process.env.RESEND_API_KEY);

  const { name, email, subject, message } = await req.json();

  const data = await resend.emails.send({
    from: "Portfolio <onboarding@resend.dev>",
    to: ["oussamahafdoune6@gmail.com"],
    subject: subject,
    html: `
      <h3>New message from portfolio</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p>${message}</p>
    `,
  });

  return Response.json(data);
}