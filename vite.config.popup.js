import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    // sourcemap: true,
    rollupOptions: {
      input: {
        'index': resolve(__dirname, 'index.html'),
      }
    }
  }
})