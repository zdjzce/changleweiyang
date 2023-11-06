import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import autoprefixer from 'autoprefixer'
import path from 'path'

export default defineConfig(() => {
  return {
    plugins: [vue(), vueJsx()],
    resolve: {
      alias: {
        '@gundam': path.resolve(__dirname, './src'),
        'snapsvg': path.resolve(__dirname, './node_modules/snapsvg/dist/snap.svg.js'),
      },
    },
    css: {
      postcss: {
        plugins: [autoprefixer],
      },
    },
    optimizeDeps: {
      // plugins: []
    },
  }
})
