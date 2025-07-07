import { defineConfig } from 'astro/config';
import node from '@astrojs/node';

export default defineConfig({
  output: 'server', // Enable server-side rendering
  adapter: node({
    mode: 'standalone',
  }),
});