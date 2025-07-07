// @ts-check
import { defineConfig, envField } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  adapter: vercel({ /* ...puerto, analytics, imageService... */ }),
  env: {
    schema: {
      // EMAIL_USER_APP_1: envField.string({ context: "server", access: "secret" }),
      // EMAIL_PASS_APP_1: envField.string({ context: "server", access: "secret" }),
      // EMAIL_USER_APP_2: envField.string({ context: "server", access: "secret" }),
      // EMAIL_PASS_APP_2: envField.string({ context: "server", access: "secret" }),
      RESEND_API_KEY: envField.string({ context: "server", access: "secret" }),
      SUPABASE_URL: envField.string({ context: "server", access: "secret" }),
      SUPABASE_ANON_KEY: envField.string({ context: "server", access: "secret" }),
    }
  }
});