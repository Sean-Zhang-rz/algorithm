function preorderTraversal(root) {
  if (!root) return;
  const result = [];
  preorderTraversalCursion(root, result);
  return result;
}
function preorderTraversalCursion(root, result) {
  if (!root) return;
  result.push(root.val);
  preorderTraversalCursion(root.left);
  preorderTraversalCursion(root.right);
}
