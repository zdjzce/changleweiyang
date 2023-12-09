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
        '@gundam-ui': path.resolve(__dirname, '../gundam-ui/src'),
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
