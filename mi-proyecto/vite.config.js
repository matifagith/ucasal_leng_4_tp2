import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ucasal_leng_4_tp2/', // Fundamental para que carguen los CSS y JS
  build: {
    outDir: '../docs', // Le dice a Vite que genere la compilación un nivel arriba, en /docs
    emptyOutDir: true
  }
})