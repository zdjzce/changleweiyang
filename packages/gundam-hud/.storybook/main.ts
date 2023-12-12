/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  async viteFinal(config, { configType }) {
    if (configType === 'DEVELOPMENT') {
      config.plugins?.push(vueJsx())
    }

    return mergeConfig(config, {})
  },
}

export default config
