import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Permet l'accès via l'adresse IP locale
    port: 5173,      // Tu peux mettre un autre port si tu veux
  },
})
