export type IrregularStyles = {
  width: string | number
  height: string | number
  background: string
  randomEdge: number
}

// TODO 优化为 'small' 'normal' 'large' 各自的默认值
export const DefaultIrregularStyles: IrregularStyles = {
  width: 300,
  height: 500,
  background: 'black',
  randomEdge: 3,
}
