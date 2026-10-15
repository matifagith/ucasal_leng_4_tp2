import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ucasal_leng_4_tp2/',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  }
})