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
        // TODO 最好是每个 package 都一致
        '@gundam/util': path.resolve(__dirname, '../util/src'),
        '@gundam/hud': path.resolve(__dirname, './src'),
        '@gundam/style': path.resolve(__dirname, '../style'),
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
