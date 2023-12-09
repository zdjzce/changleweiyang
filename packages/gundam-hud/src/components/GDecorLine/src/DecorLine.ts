import { type ExtractPropTypes } from 'vue'
import { DecorLine, DecorLineTopBottomAlign } from './instance'

/* 单条线带文字 */
/* 折线带多个 item */
/* 折线带单个 content */

export const defaultProps: Omit<DecorLine, 'type'> = {
  position: 'top-right',
  offset: 10,
  length: 200,
  rotate: 0,
}

export const props = withDefaults(defineProps<DecorLine>(), defaultProps)

export type GDecorLineProps = ExtractPropTypes<typeof props>
