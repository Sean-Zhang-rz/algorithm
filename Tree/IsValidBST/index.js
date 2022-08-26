function isValidBST(root) {
  if (!root) return false;
  return divideAndCombine(root).isBST;
}
function Result(isBST, min, max) {
  this.isBST = isBST;
  this.min = min;
  this.max = max;
}
function divideAndCombine(root) {
  if (!root) return new Result(false, Infinity, -Infinity);
  let left = divideAndCombine(root.left);
  let right = divideAndCombine(root.right);
  if (!left && !right) {
    return new Result(false, 0, 0);
  } else if (
    (root.left && root.left.max >= root.val) ||
    (root.right && root.right.min <= root.val)
  ) {
    return new Result(false, 0, 0);
  } else {
    return new Result(true, Math.min(root.val, left.min), Math.max(root.val, right.max));
  }
}
