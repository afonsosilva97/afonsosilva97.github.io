import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://afonsosilva97.github.io',
  integrations: [sitemap()],
});
