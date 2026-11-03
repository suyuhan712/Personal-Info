import { defineConfig } from 'astro/config';
export default defineConfig({
  site: process.env.SITE_URL?.trim() || 'https://info.harlan.top',
});
