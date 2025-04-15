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
      GMAIL_USER_APP: envField.string({ context: "server", access: "secret" }),
      GMAIL_PASS_APP: envField.string({ context: "server", access: "secret" }),
    }
  }
});