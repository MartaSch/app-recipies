import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/yummy-app',
  plugins: [react()],
  build: {
    outDir: 'dist', // Make sure this matches your Express static file path
  },
})
