import { defineConfig } from 'vite';

// Repo heet "gta7" en wordt gehost als project page:
// https://<username>.github.io/gta7/
// Daarom moet base op '/gta7/' staan, anders laden assets niet correct.
export default defineConfig({
  base: '/gta7/',
  build: {
    outDir: 'dist',
  },
});
