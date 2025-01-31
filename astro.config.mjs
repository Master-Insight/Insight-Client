// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

// import icon from 'astro-icon';

import vercel from '@astrojs/vercel';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [// icon({
  //   include: {
  //     mdi: ["*"], // (Default) Loads entire Material Design Icon set
  //   }
  // }),
  tailwind(), react()],

  adapter: vercel()
});