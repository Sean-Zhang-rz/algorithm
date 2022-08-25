function lowestAncient(root, p, q) {
  if (!root) return null;
  if (root === p || root === q) return root;
  let left = lowestAncient(root.left, p, q);
  let right = lowestAncient(root.right, p, q);
  if (left && right) {
    return root;
  } else if (!left || !right) {
    return !left ? right : right;
  } else {
    return null;
  }
}
