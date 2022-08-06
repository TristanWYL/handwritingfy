/** 
 * @desc This vite config is for building the javascript for people using 
 * `handwritingfy` directly at their own webpages with a <script> tag 
 * */
import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: resolve(__dirname, 'src/handwritingfy.script.js'),
      name: 'handwritingfy',
      formats: ['iife'],
      fileName: 'handwritingfy.script'
    }
  }
})