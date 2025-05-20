// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/github-pages/', // este es el nombre del repo
  plugins: [react()],
});
