import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path';

const pathResolve = (pathStr: string) => {
  return path.resolve(__dirname, pathStr);
};

 export default defineConfig(({ command, mode, ssrBuild }) => {
  return {
    plugins: [vue(), vueJsx()],
    alias: {
      '@': pathResolve('./src'),
    },
  }
 })
