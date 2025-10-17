import { defineConfig } from "astro/config";
import sitemap from '@astrojs/sitemap';
export default defineConfig({
  site: "SAEstonybrookmotorsports.github.io",
  output: "static",
  integrations: [sitemap()],
});