import type { Meta, StoryObj } from '@storybook/vue3'
import GDecorLine from './src/GDecorLine'

const meta: Meta<typeof GDecorLine> = {
  component: GDecorLine,
}

export default meta

type Story = StoryObj<typeof GDecorLine>

export const Primary: Story = {
  render: () => ({
    components: { GDecorLine },
    render: () => {
      return <GDecorLine></GDecorLine>
    },
  }),
}
