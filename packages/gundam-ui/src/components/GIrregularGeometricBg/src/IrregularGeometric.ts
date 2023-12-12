import { PropType, type ExtractPropTypes } from 'vue'
import { IrregularStyles, DefaultIrregularStyles } from '@gundam/util/instance'

export const props = {
  styles: {
    type: Object as PropType<IrregularStyles>,
    default: DefaultIrregularStyles,
  },
}

export type IrregularGeometricProps = ExtractPropTypes<typeof props>
