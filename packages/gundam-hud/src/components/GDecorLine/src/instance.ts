import type { CSSProperties } from 'vue'

export type DecorLineType = 'polyline' | 'straight'

export type DecorLineHash = {
  polyline: DecorLinePolyline
  straight: DecorLineStraight
}

export type DecorLine<Type extends DecorLineType = DecorLineType> = {
  type: Type
  properties: DecorLineHash[Type]
}

export type DecorLineShareProperties = {
  lineWidth?: number
  padding?: number
  rotate?: number
  typeWriter?: boolean
  hightLightColor?: string
}

/* 单条直线的类型 */
export type StraightLineStyle = 'pin' | 'calibration'

type StraightLineHash = {
  pin: StraightPin
  calibration: StraightCalibration
}

export type DecorLineStraight<
  LineStyle extends StraightLineStyle = StraightLineStyle,
> = DecorLineShareProperties & {
  lineStyle: LineStyle
  /* associated text*/
  content?: string
  contentStyle?: string | CSSProperties
} & StraightLineHash[LineStyle]

/* pin 钗直线 */
// height will be calculated by circleRadius
export type StraightPin = {
  direction: 'left' | 'right'
  underText?: string
  underTextStyle?: string | CSSProperties
  /* associated svg*/
  circleRadius: number
  circleColor: string
  mainLineColor: string
  minorLineColor: string
}

/* calibration 刻度直线 */
export type StraightCalibration = {
  content: string
  underText?: string
}

export type PolylineStyle = 'rifle-I' | 'rifle-II'
export type PolylinePosition = `${'top' | 'bottom'}-${'right' | 'left'}`
export type PolylineHash = {
  'rifle-I': PolylineRifleI
  'rifle-II': PolylineRifleII
}

export type DecorLinePolyline<Type extends PolylineStyle = PolylineStyle> =
  DecorLineShareProperties & {
    lineStyle: PolylineStyle
    direction?: PolylinePosition
    /* associated text*/
    content?: string
    contentStyle?: string | CSSProperties
  } & PolylineHash[Type]

export type PolylineRifleI = {
  underText?: string
  underTextStyle?: string | CSSProperties
}

export type PolylineRifleII = {
  underText?: string
  underTextStyle?: string | CSSProperties
}
