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
    description: "Agencia de desarrollos tecnologicos",
    address: "dirección",
    whatsapp: "+54-93541-613185",
  },
  // Información para usar en las redes sociales (no whatsapp, si e-mail)
  social: [
    {
      name: "Email",
      href: "mailto:base.for.insight@gmail.com",
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
      href: "https://www.instagram.com/",
      icon: Instagram,
    },
    {
      name: "YouTube",
      href: "https://www.youtube.com/",
      icon: YouTube,
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/insight-desarrolladores/",
      icon: LinkedIn,
    },
  ],
  images: {
    logo: [
      "/logos/Insight_hor.png"
    ],
  }
}

export default company