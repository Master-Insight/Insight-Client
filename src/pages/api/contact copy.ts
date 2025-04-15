import type { APIRoute } from 'astro';
import { EMAIL_USER_APP_1, EMAIL_PASS_APP_1,  EMAIL_USER_APP_2, EMAIL_PASS_APP_2 } from "astro:env/server"
import nodemailer from 'nodemailer';

const email = EMAIL_USER_APP_2;
const password = EMAIL_PASS_APP_2;

// Api: POST : Enviar email
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { name, email, message } = body;

  // const transporter = nodemailer.createTransport({
  //   service: 'gmail', //host: smt.gmail.com
  //   port: 587,        // 465 + secure: true,
  //   auth: {
  //     user: email,
  //     pass: password,
  //   },
  // });
  const transporter = nodemailer.createTransport({
    service: 'c2790793.ferozo.com', //host: smt.gmail.com
    port: 465,        // 465 + secure: true,
    secure: true,
    auth: {
      user: email,
      pass: password,
    },
  });

  try {
    const mailOptions = {
      from: email,
      to: 'tuemail@tudominio.com',
      subject: `Nuevo mensaje de ${name}`,
      text: message,
    }

    await transporter.sendMail(mailOptions);

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