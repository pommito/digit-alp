// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: 'https://digit-alp.fr',
  integrations: [sitemap({ lastmod: new Date('2022-02-24') }), partytown()],
});
