import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import image from '@astrojs/image';

export default defineConfig({
  output: 'server', // Enable server-side rendering
  site: 'https://CVRobo.github.io',
  adapter: node({
  mode: 'standalone',
  integrations: [image()],

  }),
});