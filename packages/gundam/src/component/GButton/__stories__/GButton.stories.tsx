import type { Meta, StoryObj } from '@storybook/vue3'
import GButton from '../src/GButton'

const meta: Meta<typeof GButton> = {
  component: GButton,
}

export default meta

type Story = StoryObj<typeof GButton>

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { GButton },
    props: Object.keys(argTypes),
    template: '<GButton v-bind="$props" v-on="$props" />',
  }),
  args: {
    type: 'success',
    tag: 'button',
    size: 'small',
  },
}
