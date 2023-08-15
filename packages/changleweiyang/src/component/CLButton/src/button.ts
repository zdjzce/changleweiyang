import { PropType, type ExtractPropTypes } from 'vue'
import { ButtonTag, ButtonType } from './instance'

export const props = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'default',
  },
  tag: {
    type: String as PropType<ButtonTag>,
    default: 'button',
  },
}

export type ButtonProps = ExtractPropTypes<typeof props>
