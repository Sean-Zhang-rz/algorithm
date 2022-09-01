function binaryTreePaths(root) {
  const result = []
  if (!root) return result
  const list = []
  list.push(root.val)
  helper(result, list, root)
  return result
}
function helper(result, list, root) {
  if (!root.left && !root.right) {
    result.push(list.join('->'))
    return
  }
  if (root.left) {
    list.push(root.left.val)
    helper(result, list, root.left)
    list.pop()
  }
  if (root.right) {
    list.push(root.right.val)
    helper(result, list, root.right)
    list.pop()
  }
}