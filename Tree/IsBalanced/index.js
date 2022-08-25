// O(nlogn) - O(n^2)
function isBalanced(root) {
  if (!root) return true;
  if (Math.abs(getDepth(root.left) - getDepth(root.right)) > 1) return false;
  return isBalanced(root.left) && isBalanced(root.right);
}
function getDepth(root) {
  return !root ? 0 : Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}

// O(n)
function isBalanced(root) {
  return getHeight(root) !== -1;
}
function getHeight(root) {
  if (!root) return 0;
  let left = getHeight(root.left);
  let right = getHeight(root.right);
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
  return Math.max(left, right) + 1;
}
