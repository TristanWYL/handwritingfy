import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        popup: resolve(__dirname, 'src/popup.html'),
        chromeExtension: resolve(__dirname, 'handwritingfy.js')
      }
    }
  }
})