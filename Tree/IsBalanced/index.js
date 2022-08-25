function isBalanced(root) {
  if (!root) return true;
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}
function getDepth(root) {
  return !root ? 0 : Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}
