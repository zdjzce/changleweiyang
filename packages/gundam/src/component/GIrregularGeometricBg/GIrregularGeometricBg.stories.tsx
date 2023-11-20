import type { Meta, StoryObj } from '@storybook/vue3'
import GIrregularGeometricBg from './src/GIrregularGeometricBg'

const meta: Meta<typeof GIrregularGeometricBg> = {
  component: GIrregularGeometricBg,
}

export default meta

type Story = StoryObj<typeof GIrregularGeometricBg>

export const Primary: Story = {
  render: (args) => ({
    components: { GIrregularGeometricBg },
    props: Object.keys(args),
    render: () => {
      return (
        <GIrregularGeometricBg styles={args.styles}>
          asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
        </GIrregularGeometricBg>
      )
    },
  }),
  args: {
    styles: {
      width: 300,
      height: 150,
      background: '#FDAD05',
      randomEdge: 3,
    },
  },
}
