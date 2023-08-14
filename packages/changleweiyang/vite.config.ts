import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import postcssNesting from 'postcss-nesting'
import postcssImport from 'postcss-import'
import autoprefixer from 'autoprefixer'
import path from 'path'

export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      postcss: {
        plugins: [postcssNesting, postcssImport, autoprefixer],
      },
    },
    optimizeDeps: {
      // plugins: []
    },
  }
})
