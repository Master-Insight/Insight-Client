import type { APIRoute } from 'astro';
import { EMAIL_USER_APP_1, EMAIL_PASS_APP_1, EMAIL_USER_APP_2, EMAIL_PASS_APP_2 } from "astro:env/server"
import nodemailer from 'nodemailer';

const email = EMAIL_USER_APP_2;
const password = EMAIL_PASS_APP_2;

// 

// Api: POST : Enviar email
export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { emailfrom, name, emailto, message } = body;

  const transporter = nodemailer.createTransport({
    // Gmail no te deja enviar desde otro email que no sea EMAIL_USER_APP_1
    service: 'gmail', //host: smt.gmail.com
    port: 587,        // 465 + secure: true,
    auth: {
      user: EMAIL_USER_APP_1,
      pass: EMAIL_PASS_APP_1,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  // const transporter = nodemailer.createTransport({
  //   service: 'c2790793.ferozo.com', //host: smt.gmail.com
  //   port: 465,        // 465 + secure: true,
  //   secure: true,
  //   auth: {
  //     user: EMAIL_USER_APP_2,
  //     pass: EMAIL_PASS_APP_2,
  //   },
  // });

  // Precaucion adicional contra codigo malicioso
  const sanitize = (str: string) => str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  const cleanMessage = sanitize(message);

  const textToSend = `
    <div style="font-family: sans-serif; color: #333; padding: 20px;">
      <h2>📬 Nuevo mensaje de contacto</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${emailto}</p>
      <p><strong>Mensaje:</strong><br />${cleanMessage.replace(/\n/g, "<br />")}</p>
      <hr />
      <small>Este mensaje fue enviado desde el formulario de contacto de <a href="https://insightdevs.com.ar">insightdevs.com.ar</a></small>
    </div>
  `

  try {
    const mailOptions = {
      from: `"InsightDev" <EMAIL_USER_APP_1>`,
      to: "gustavo.sirtori@gmail.com",
      subject: `📩 Nueva consulta de ${name}`,
      replyTo: emailto,
      text: textToSend,
    }

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } },
    );
  } catch (error) {
    console.log(error);

    return new Response(
      JSON.stringify({ success: false, error }),
      { status: 500, headers: { 'Content-Type': 'application/json' } },
    );
  }
};