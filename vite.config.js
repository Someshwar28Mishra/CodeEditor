import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base:"/codeEditor",
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Bind to all network interfaces
    port: process.env.PORT || 5173, // Use Render's PORT or default to 5173
  },
})
