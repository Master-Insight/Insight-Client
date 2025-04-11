import type { APIRoute } from 'astro';
import { GMAIL_USER_APP, GMAIL_PASS_APP } from "astro:env/server"
import nodemailer from 'nodemailer';

const email = GMAIL_USER_APP;
const password = GMAIL_PASS_APP;

// Api: POST : Enviar email
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  const transporter = nodemailer.createTransport({
    service: 'gmail', //host: smt.gmail.com
    port: 587,        // 465 + secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'tuemail@tudominio.com',
      subject: `Nuevo mensaje de ${name}`,
      text: message,
    });

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};