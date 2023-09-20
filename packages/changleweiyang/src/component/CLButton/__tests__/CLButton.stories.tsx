import type { Meta, StoryObj } from '@storybook/vue3'
import CLButton from '../src/CLButton'

const meta: Meta<typeof CLButton> = {
  component: CLButton,
}

export default meta

type Story = StoryObj<typeof CLButton>

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { CLButton },
    props: Object.keys(argTypes),
    template: '<CLButton v-bind="$props" v-on="$props" />',
  }),
  args: {
    type: 'success',
    tag: 'button',
    size: 'small',
  },
}
