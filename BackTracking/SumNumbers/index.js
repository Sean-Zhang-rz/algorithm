function sumNumbers (root) {
  if (!root) return 0
  const result = []
  const list = []
  list.push(root.val)
  helper(result, list, root)
  return result.reduce((a, b) => a + b)
}
function helper(result, list, root){
  if (!root.left && !root.right) {
    result.push(+list.join(''))
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