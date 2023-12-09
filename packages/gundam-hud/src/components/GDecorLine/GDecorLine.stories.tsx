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
      console.log('args', args)
      return (
        <GDecorLine type={args.type}>
          {{
            content: () => <div>test</div>,
            underText: () => <div>test2</div>,
          }}
        </GDecorLine>
      )
    },
  }),
  args: {
    type: 'straight',
    properties: {
      lineStyle: 'pin',
      content: '',
    },
  },
}
