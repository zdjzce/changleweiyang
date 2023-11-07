import { PropType, type ExtractPropTypes } from 'vue'
import { IrregularStyles } from './instance'

export const props = {
  styles: {
    type: Object as PropType<IrregularStyles>,
  },
}

export type IrregularGeometricProps = ExtractPropTypes<typeof props>
