function isSymmetric(root) {
  if (!root) return false;
  return helper(root.left, root.right);
}
function helper(left, right) {
  if (!left && !right) {
    return true;
  } else if (!left || !right) {
    return false;
  } else if (left.val !== right.val) {
    return false;
  }
  return helper(left.left, right.right) && helper(left.right, right.left);
}
