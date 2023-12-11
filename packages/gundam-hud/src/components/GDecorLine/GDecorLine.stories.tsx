import type { Meta, StoryObj } from '@storybook/vue3'
import GDecorLine from './src/GDecorLine'

const meta: Meta<typeof GDecorLine> = {
  component: GDecorLine,
}

export default meta

type Story = StoryObj<typeof GDecorLine>

export const Primary: Story = {
  render: (args) => ({
    props: Object.keys(args),
    components: { GDecorLine },
    render: () => {
      return (
        <GDecorLine {...args}>
          {{
            content: () => (
              <span style='font-size: 14px; color: #3B6863;'>
                It's test title
                <button>123</button>
              </span>
            ),
            underText: () => <div>Under Text</div>,
          }}
        </GDecorLine>
      )
    },
  }),
  // 打字机效果会与 attribute 配合，如果传入插槽则不会触发打字机。
  args: {
    type: 'straight',
    properties: {
      lineStyle: 'pin',
      content: 'Attribute content ',
      underText: 'Attribute underText Attribute',
      typeWriter: true,
    },
  },
}
