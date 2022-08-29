const TreeNode = require("../Tree");

function insertTree(root, val) {
  if (!root) return new TreeNode(val)
  let node = root
  while (node) {
    if (node.val < val) {
      if (!node.right) node.right = new TreeNode(val)
      node = node.right
    } else if (node.val > val) {
      if (!node.left) node.left = new TreeNode(val)
      node = node.left
    } else {
      return root
    }
  }
  return root
}