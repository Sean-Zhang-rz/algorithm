function trap (height) {
  if (!height || !height.length) return 0
  const left = [] // 对于每个i， 记录左边最大的位置
  const right = [] // 对于每个i，记录右边最大的位置
  let max = -Infinity
  let trap = 0
  for (let i = 0; i < height.length; i++) {
    max = Math.max(height[i], max)
    left[i] = max
  }
  max = -Infinity
  for (let i = height.length - 1; i >= 0; i--) {
    max = Math.max(height[i], max)
    right[i] = max
  }
  for (let i = 0; i < height.length - 1; i++) {
    const minValue = Math.min(left[i], right[i])
    trap += minValue - height[i]
  }
  return trap
}