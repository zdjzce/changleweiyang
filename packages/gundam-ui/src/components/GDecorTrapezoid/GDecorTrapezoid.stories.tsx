import type { Meta, StoryObj } from '@storybook/vue3'
import GDecorTrapezoid from './src/GDecorTrapezoid'

const meta: Meta<typeof GDecorTrapezoid> = {
  component: GDecorTrapezoid,
}

export default meta

type Story = StoryObj<typeof GDecorTrapezoid>

export const Primary: Story = {
  render: (args) => ({
    components: { GDecorTrapezoid },
    props: Object.keys(args),
    render: () => {
      return <GDecorTrapezoid></GDecorTrapezoid>
    },
  }),
}
