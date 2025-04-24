import Facebook from "../src/components/icons/Facebook.ico.astro";
import Twitter from "../src/components/icons/Twitter.ico.astro";
import Instagram from "../src/components/icons/Instagram.ico.astro";
import YouTube from "../src/components/icons/Youtube.ico.astro";
import LinkedIn from "../src/components/icons/LinkedIn.ico.astro";
import Email from "../src/components/icons/Email.alternate.ico.astro";

// los iconos son de https://icon-sets.iconify.design/

const company = {
  // Información de la empresa
  info: {
    name: "Insight",
    description: "Agencia de desarrollos tecnologicos. Trabajamos con emprendedores argentinos para potenciar sus negocios.",
    address: "dirección",
    whatsapp: "+54-3541-613185",
    email: "contacto@insightdevs.com.ar",
    url: "https://www.insightdevs.com.ar/",
    preview: "https://tjxmrdixvvjjeejbkfht.supabase.co/storage/v1/object/public/insightdev.public/Page/preview-image.webp",
  },
  // Información para usar en las redes sociales (no whatsapp, si e-mail)
  social: [
    {
      name: "Email",
      href: "mailto:contacto@insightdevs.com.ar",
      icon: Email,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/",
      icon: Facebook,
    },
    {
      name: "X (Twitter)",
      href: "https://twitter.com/",
      icon: Twitter,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/insight_developers",
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      icon: YouTube,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/insightdevs",
      icon: LinkedIn,
    },
  ],
  images: {
    logo: [
      "/logos/Insight_hor.webp",
      "/logos/Insight_hor_blanco.webp",
      "/logos/Insight.webp",
      "/logos/Insight_blanco.webp",
    ],
  }
}

export default company