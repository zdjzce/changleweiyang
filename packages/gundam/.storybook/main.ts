/** @type { import('@storybook/vue3-vite').StorybookConfig } */

import type { StorybookConfig } from '@storybook/vue3-vite'
import { mergeConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/vue3-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
    defaultName: 'Documentation',
  },
  async viteFinal(config, { configType }) {

    if (configType === 'DEVELOPMENT') {
      config.plugins?.push(vueJsx())
    }

    return mergeConfig(config, {})

  }
}

export default config
