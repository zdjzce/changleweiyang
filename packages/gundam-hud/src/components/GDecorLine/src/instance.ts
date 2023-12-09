export type DecorLineTopBottomAlign = `${'top' | 'bottom'}-${'right' | 'left'}`

export type DecorLineType = 'polyline' | 'straight'

export type DecorLineHash = {
  polyline: DecorLinePolyline
  straight: DecorLineShareProperties & DecorLineStraight<StraightLineStyle>
}

export type DecorLine<Type extends DecorLineType = DecorLineType> = {
  type: Type
  properties: DecorLineHash[Type]
}

export type DecorLineShareProperties = {
  offset?: number
  length?: number
  rotate?: number
}

/* 单条直线的类型 */
export type StraightLineStyle = 'pin' | 'calibration'

type StraightLineHash = {
  pin: StraightPin
  calibration: StraightCalibration
}

export type DecorLineStraight<
  LineStyle extends StraightLineStyle = StraightLineStyle,
> = {
  lineStyle: LineStyle
} & StraightLineHash[LineStyle]

/* 钗直线 */
export type StraightPin = {
  content: string
  underText?: string
  hightLightColor?: string
}

/* 刻度直线 */
export type StraightCalibration = {
  content: string
  underText?: string
  hightLightColor?: string
}

export type DecorLinePolyline = DecorLineShareProperties & {
  position: DecorLineTopBottomAlign
}
