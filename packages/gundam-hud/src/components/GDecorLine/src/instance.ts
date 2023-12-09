export type DecorLineTopBottomAlign = `${'top' | 'bottom'}-${'right' | 'left'}`

export type DecorLine<Type = 'polyline' | 'straight'> = {
  type: Type
  position?: Type extends 'polyline' ? DecorLineTopBottomAlign : ''
  offset?: number
  length?: number
  rotate?: number
}
