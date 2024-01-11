/* 向量 检测一个点是否在线段上 */
export const isPointOnLineSegment = (
  start: DOMPoint,
  end: DOMPoint,
  point: DOMPoint,
) => {
  const dx = end.x - start.x
  const dy = end.y - start.y
  const innerProduct = (point.x - start.x) * dx + (point.y - start.y) * dy
  return 0 <= innerProduct && innerProduct <= dx * dx + dy * dy
}

/* 在已知角度的情况下，画一条新的线段 */
export function drawLineSegment(
  start: DOMPoint,
  length: number,
  angle: number,
) {
  const end = {} as DOMPoint
  end.x = start.x + length * Math.cos(angle)
  end.y = start.y + length * Math.sin(angle)
  return end
}

// 线性插值 获取线段上的所有点的坐标：
export function getPointsOnLineSegment(
  start: DOMPoint,
  end: DOMPoint,
  numPoints: number,
) {
  const points = []
  for (let i = 0; i <= numPoints; i++) {
    const t = i / numPoints
    const x = start.x + t * (end.x - start.x)
    const y = start.y + t * (end.y - start.y)
    points.push(new DOMPoint(x, y))
  }
  return points
}

// 转换 SVG 坐标到真实世界坐标
export function convertSVGPointToRealWorldPoint(
  svgPoint: SVGPoint,
  svg: SVGGraphicsElement,
) {
  const matrix = svg.getScreenCTM()?.inverse()
  return svgPoint.matrixTransform(matrix)
}

// 将真实世界坐标转换为 svg 坐标
export function convertRealWorldPointToSVGPoint(
  realWorldPoint: SVGPoint,
  svg: SVGGraphicsElement,
) {
  const matrix = svg.getScreenCTM()
  return matrix ? realWorldPoint.matrixTransform(matrix) : ({} as DOMPoint)
}
