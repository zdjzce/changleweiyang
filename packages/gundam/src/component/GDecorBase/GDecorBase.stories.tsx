import type { Meta, StoryObj } from '@storybook/vue3'
import GDecorBase from './src/GDecorBase'

const meta: Meta<typeof GDecorBase> = {
  component: GDecorBase,
}

export default meta

type Story = StoryObj<typeof GDecorBase>

export const Primary: Story = {
  render: (args) => ({
    components: { GDecorBase },
    props: Object.keys(args),
    render: () => {
      return <GDecorBase></GDecorBase>
    },
  }),
}
