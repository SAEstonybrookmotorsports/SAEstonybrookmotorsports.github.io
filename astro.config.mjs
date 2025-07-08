import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

export default defineConfig({
  output: 'static',
  site: 'https://CVRobo.github.io',
  integrations: [image()],
});
