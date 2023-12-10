import { type ExtractPropTypes, PropType, Slots } from 'vue'
import { DecorLine, DecorLineHash, DecorLineType } from './instance'

/* 单条线带文字 */
/* 折线带多个 item */
/* 折线带单个 content */

export const props = {
  type: {
    type: String as PropType<DecorLineType>,
    required: true,
  },
  properties: {
    type: Object as PropType<DecorLine['properties']>,
  },
}

export const decorStraightProps = {
  properties: {
    type: Object as PropType<DecorLineHash['straight']>,
    required: true,
  },
  lineSlots: {
    type: Object as PropType<Slots>,
  },
}

export type GDecorLineProps = ExtractPropTypes<typeof props>
