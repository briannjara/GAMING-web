import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from the network
    port: 5173, // Ensures Vite runs on port 5173
    strictPort: true, // Prevents Vite from changing the port if 5173 is busy
  },
})
