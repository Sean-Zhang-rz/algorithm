let max = -Infinity

function maxPathSum (root) {
  if (!root) return 0
  divideAndCombine(root)
  return max
}

function divideAndCombine(root){
  if (!root) return -Infinity
  let left = divideAndCombine(root.left)
  let right = divideAndCombine(root.right)
  const maxRes = Math.max(left, right)

  let pathSum = Math.max(maxRes, 0) + root.val
  let value = Math.max(maxRes, left + right + root.val)
  max = Math.max(Math.max(value, pathSum), max)
  return pathSum
}