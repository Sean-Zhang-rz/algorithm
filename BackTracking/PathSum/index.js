function pathSum(root, targetSum){
  const result = []
  if (!root) return result
  const list = []
  list.push(root.val)
  helper(result, list, root, targetSum)
  return result
}
function helper(result, list, root, targetSum) {
  targetSum = targetSum - root.val
  
  if (targetSum === 0 && !root.left && !root.right) {
    result.push([...list])
    return
  }

  if (root.left) {
    list.push(root.left.val)
    helper(result, list, root.left, targetSum)
    list.pop()
  }

  if (root.right) {
    list.push(root.right.val)
    helper(result, list, root.right, targetSum)
    list.pop()
  }
}