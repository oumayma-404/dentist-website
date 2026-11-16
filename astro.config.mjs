// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://implants-hammamet.tn',
  build: {
    // Emit /pages/fr/about-fr.html rather than /pages/fr/about-fr/index.html,
    // so every URL of the previous site (and its Google ranking) keeps working.
    format: 'file',
  },
});
