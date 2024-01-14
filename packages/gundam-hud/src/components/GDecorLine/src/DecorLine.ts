import type { ExtractPropTypes, PropType, Slots } from 'vue'
import type {
  DecorLine,
  DecorLineHash,
  DecorLinePolyline,
  DecorLineStraight,
  DecorLineType,
} from './instance'

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
  type: props['type'],
  properties: {
    type: Object as PropType<DecorLineHash['straight']>,
    required: true,
  },
  lineSlots: {
    type: Object as PropType<Slots>,
  },
}

export const decorStraightPinProps = {
  type: props['type'],
  properties: {
    type: Object as PropType<DecorLineStraight<'pin'>>,
  },
  lineSlots: {
    type: Object as PropType<Slots>,
  },
}

export const decorStraightCalibrationProps = {
  type: props['type'],
  properties: {
    type: Object as PropType<DecorLineStraight<'calibration'>>,
  },
  lineSlots: {
    type: Object as PropType<Slots>,
  },
}

export const decorPolylineProps = {
  type: props['type'],
  properties: {
    type: Object as PropType<DecorLineHash['polyline']>,
  },
  lineSlots: {
    type: Object as PropType<Slots>,
  },
}

export const decorPolylineRifleIProps = {
  type: props['type'],
  properties: {
    type: Object as PropType<DecorLinePolyline<'rifle-I'>>,
  },
  lineSlots: {
    type: Object as PropType<Slots>,
  },
}

export type GDecorLineProps = ExtractPropTypes<typeof props>
