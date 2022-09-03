function deleteNode(root, key) {
  if (!root) return null;
  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    if (!root.left && !left.right) {
      root = null;
    } else if (!root.left || !root.right) {
      root = root.left || root.right;
    } else {
      const rightMin = getRightMin(root.right);
      root.val = rightMin;
      root.right = deleteNode(root.right, rightMin);
    }
  }
  return root;
}
function getRightMin(root) {
  if (!root.left) return root.val;
  return getRightMin(root.left);
}
