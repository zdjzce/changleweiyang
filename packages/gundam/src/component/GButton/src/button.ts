import { PropType, type ExtractPropTypes } from 'vue'
import { ButtonTag, ButtonType, ButtonSize } from './instance'

export const props = {
  type: {
    type: String as PropType<ButtonType>,
    default: () => 'default',
  },
  tag: {
    type: String as PropType<ButtonTag>,
    default: () => 'button',
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: () => 'default',
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
  loading: {
    type: Boolean,
    default: () => false,
  },
}

export type ButtonProps = ExtractPropTypes<typeof props>
