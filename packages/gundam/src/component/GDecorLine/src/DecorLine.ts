import { type ExtractPropTypes } from 'vue'
import { DecorLine, DecorLineTopBottomAlign } from './instance'

export const defaultProps: Omit<DecorLine, 'type'> = {
  position: 'top-right',
  offset: 10,
  length: 200,
  rotate: 0,
}

export const props = withDefaults(defineProps<DecorLine>(), defaultProps)

export type GDecorLineProps = ExtractPropTypes<typeof props>
