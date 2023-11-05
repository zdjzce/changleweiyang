import type { Meta, StoryObj } from '@storybook/vue3'
import GIrregularGeometricBg from './src/GIrregularGeometricBg'

const meta: Meta<typeof GIrregularGeometricBg> = {
  component: GIrregularGeometricBg,
}

export default meta

type Story = StoryObj<typeof GIrregularGeometricBg>

export const Primary: Story = {
  render: (args, { argTypes }) => ({
    components: { GIrregularGeometricBg },
    props: Object.keys(argTypes),
    template: '<GIrregularGeometricBg />',
  }),
}
