function minDepth(root) {
  if (!root) return 0;
  let left = minDepth(root.left);
  let right = minDepth(root.right);
  if (left === 0) {
    return right + 1;
  } else if (right === 0) {
    return left + 1;
  } else {
    return Math.min(left, right) + 1;
  }
}
