import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: './',               // 🔥 THIS FIXES 404
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
