// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@astrojs/tailwind';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  output: 'server', // Enable SSR for cookie support
  adapter: netlify(),
  vite: {
    plugins: [tailwindcss()]
  }
});