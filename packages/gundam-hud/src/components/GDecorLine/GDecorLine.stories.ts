import type { Meta, StoryObj } from '@storybook/vue3'
import GDecorLine from './src/GDecorLine'

const meta: Meta<typeof GDecorLine> = {
  title: 'Gundam/GDecorLine',
  component: GDecorLine,
  argTypes: {
    properties: {
      name: 'properties',
      description: 'set straight pin properties',
      control: 'object',
    },
  },
  render: (args) => ({
    components: {
      GDecorLine,
    },
    setup() {
      return {
        ...args,
      }
    },
    template: '<GDecorLine :type="type" :properties="properties" />',
  }),
}

export default meta

type Story = StoryObj<typeof GDecorLine>

export const StraightPin: Story = {
  args: {
    type: 'straight',
    properties: {
      lineStyle: 'pin',
      content: 'Attribute content ',
      underText: 'Attribute underText Attribute',
      // 打字机效果会与 attribute 配合，如果传入插槽则不会触发打字机。
      typeWriter: true,
      direction: 'left',
      lineWidth: 250,
      circleRadius: 30,
      padding: 20,
      // TODO 获取主题色
      circleColor: 'rgba(38, 38, 38, 0.3)',
      mainLineColor: 'black',
      minorLineColor: 'rgb(81, 104, 104)',
    },
  },
}
