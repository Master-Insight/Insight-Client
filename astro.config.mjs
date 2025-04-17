// @ts-check
import { defineConfig, envField } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [tailwind(), react()],
  adapter: vercel(),
  env: {
    schema: {
      // EMAIL_USER_APP_1: envField.string({ context: "server", access: "secret" }),
      // EMAIL_PASS_APP_1: envField.string({ context: "server", access: "secret" }),
      // EMAIL_USER_APP_2: envField.string({ context: "server", access: "secret" }),
      // EMAIL_PASS_APP_2: envField.string({ context: "server", access: "secret" }),
      RESEND_APIKEY: envField.string({ context: "server", access: "secret" }),
    }
  }
});