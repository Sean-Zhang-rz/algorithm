function inorderTraversal(root) {
  if (!root) return;
  const result = [];
  inorderTraversalCursion(root, result);
  return result;
}
function inorderTraversalCursion(root, result) {
  if (!root) return;
  inorderTraversalCursion(root.left);
  result.push(root.val);
  inorderTraversalCursion(root.right);
}
