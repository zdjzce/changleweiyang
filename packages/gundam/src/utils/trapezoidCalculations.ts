export function toRadians(degrees: number) {
  return degrees * (Math.PI / 180)
}

/**
 * const base = 60
 * const angle = 60
 * const topLength = calculateTopLength(base, angle)
 */
export function calculateTopLength(base: number, angle: number) {
  const halfBase = base / 2
  const height = halfBase * Math.sin(toRadians(angle))
  const topLength = 2 * Math.sqrt(Math.pow(halfBase, 2) - Math.pow(height, 2))
  return Math.floor(topLength)
}
