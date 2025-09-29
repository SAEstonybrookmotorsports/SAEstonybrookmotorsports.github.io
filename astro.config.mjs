import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: "https://CVRobo.github.io",
  output: "static",
  integrations: [sitemap()],
});