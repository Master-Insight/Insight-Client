import { Resend } from 'resend';
import type { APIRoute } from "astro";
import { RESEND_API_KEY } from "astro:env/server";
import company from '@config/company';

// Coneccion a Resend
const resend = new Resend(RESEND_API_KEY);
const emailCompany = company.info.email

// Api: POST : Enviar email
export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: "Campos requeridos incompletos" }),
        { status: 400 }
      );
    }

    // Sanitización del contenido
    const sanitize = (str: string) =>
      str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanMessage = sanitize(message);

    const htmlToSend = `
      <div style="font-family: sans-serif; color: #333; padding: 20px;">
        <h2>📬 Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${sanitize(name)}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Mensaje:</strong><br />${cleanMessage.replace(
          /\n/g,
          "<br />",
        )}</p>
        <hr />
        <small>Este mensaje fue enviado desde el formulario de contacto de <a href="https://insightdevs.com.ar">insightdevs.com.ar</a></small>
      </div>
    `;
    const textToSend = `Nuevo mensaje de contacto:
      Nombre: ${name}
      Email: ${email}
      Mensaje: ${message}

      Enviado desde insightdevs.com.ar`;

    const mailOptions = {
      from: 'InsightDev <noreply@email.insightdevs.com.ar>', // Este dominio debe estar verificado en Resend
      to: [emailCompany],
      replyTo: email,
      subject: `📩 Nueva consulta: Contacto `,
      text: textToSend, // Versión en texto plano
      html: htmlToSend, // Versión en HTML
    };

    const { data, error } = await resend.emails.send(mailOptions);

    if (error) {
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message ?? 'No se pudo enviar el mensaje' }),
        { status: 500 }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ success: false, error: 'Error inesperado' }), { status: 500 });
  }
};