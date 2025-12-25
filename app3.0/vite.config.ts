import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',                 // ✅ IMPORTANT (Netlify)
  build: {
    outDir: '../docs',       // ✅ goes OUT of app3.0
    emptyOutDir: true,
  },
})
