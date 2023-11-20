export type DecorLineTopBottomAlign = `${'top' | 'bottom'}-${
  | 'right'
  | 'left'
  | 'center'}`

export type DecorLineLeftRightAlign = `${'left' | 'right'}-${
  | 'top'
  | 'bottom'
  | 'center'}`

export type DecorLine = {
  // TODO 折线与直线目前只打算做一种风格，后续可以扩展。
  type: 'polyline' | 'straight'
  position?: DecorLineTopBottomAlign | DecorLineLeftRightAlign
  offset?: number
  length?: number
  rotate?: number
}
