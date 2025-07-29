import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import compression from 'vite-plugin-compression'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    compression(), // compress assets
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,  // remove console logs
        drop_debugger: true  // remove debugger statements
      }
    },
    rollupOptions: {
      treeshake: true, // remove unused JS
      output: {
        manualChunks: undefined, // let Vite split code as needed
      }
    }
  }
})
