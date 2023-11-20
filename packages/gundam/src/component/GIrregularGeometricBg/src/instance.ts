export type IrregularStyles = {
  width: number
  height?: number
  background: string
  randomEdge: number
}

// height will auto adapt
export const DefaultIrregularStyles: IrregularStyles = {
  width: 300,
  height: 500,
  background: 'black',
  randomEdge: 3,
}
