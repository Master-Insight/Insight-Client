import type { APIRoute } from "astro";
import {
  EMAIL_USER_APP_1,
  EMAIL_PASS_APP_1,
  EMAIL_USER_APP_2,
  EMAIL_PASS_APP_2,
} from "astro:env/server";
import nodemailer from "nodemailer";
import fs from "fs";
import path from "path";

// Api: POST : Enviar email
export const POST: APIRoute = async ({ request }) => {
  // Validar que la solicitud es JSON
  if (request.headers.get("content-type") !== "application/json") {
    return new Response(
      JSON.stringify({
        success: false,
        error: "Content-Type must be application/json",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } },
    );
  }

  try {
    const body = await request.json();
    const { emailfrom, name, emailto, message, service = "donweb" } = body;

    // Certificado seguridad
    const certPath = path.join(process.cwd(), "config", "donweb-cert.pem");
    // Verificar que el certificado existe
    if (!fs.existsSync(certPath)) {
      throw new Error("Certificado SMTP no encontrado");
    }

    // Validar campos requeridos
    if (!name || !emailto || !message) {
      return new Response(
        JSON.stringify({
          success: false,
          error: "Faltan campos requeridos: name, emailto o message",
        }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    function createTransport(myservice) {
      if (myservice == "donweb") {
        return nodemailer.createTransport({
          host: "mail.insightdevs.com.ar", //host: smt.gmail.com
          port: 465, // 465 + secure: true,
          secure: true,
          auth: {
            user: EMAIL_USER_APP_2,
            pass: EMAIL_PASS_APP_2,
          },
          tls: {
            ca: fs.readFileSync(certPath), // Carga el certificado
          },
          socketTimeout: 10000, // 10 segundos de timeout
        });
      }
      if (myservice == "gmail") {
        return nodemailer.createTransport({
          // Gmail no te deja enviar desde otro email que no sea EMAIL_USER_APP_1
          service: "gmail", //host: smt.gmail.com
          auth: {
            user: EMAIL_USER_APP_1,
            pass: EMAIL_PASS_APP_1,
          },
        });
      }
      throw new Error("Servicio de email no soportado");
    }

    const email = service == "donweb" ? EMAIL_USER_APP_2 : EMAIL_USER_APP_1;
    const transporter = createTransport(service);

    // Sanitización del contenido
    const sanitize = (str: string) =>
      str.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    const cleanMessage = sanitize(message);

    const htmlToSend = `
      <div style="font-family: sans-serif; color: #333; padding: 20px;">
        <h2>📬 Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${sanitize(name)}</p>
        <p><strong>Email:</strong> ${sanitize(emailto)}</p>
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
      Email: ${emailto}
      Mensaje: ${message}

      Enviado desde insightdevs.com.ar`;

    const mailOptions = {
      from: `"InsightDev" <${email}>`,
      to: "gustavo.sirtori@gmail.com",
      subject: `📩 Nueva consulta de ${name}`,
      replyTo: emailto,
      text: textToSend, // Versión en texto plano
      html: htmlToSend, // Versión en HTML
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error al enviar el email:", error);

    return new Response(
      JSON.stringify({
        success: false,
        error: "Ocurrió un error al procesar tu solicitud",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
};

// Codigo para obtener certificado DONWEB
// openssl s_client -connect c...ferozo.com:465 -showcerts | openssl x509 -outform PEM > donweb-cert.pem
