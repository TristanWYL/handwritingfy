import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      /** @desc executable for chrome extension */
      entry: resolve(__dirname, 'src/handwritingfy.chrome.js'),
      name: 'handwritingfy',
      formats: ['iife'],
      fileName: 'handwritingfy.chrome'
    }
  }
})