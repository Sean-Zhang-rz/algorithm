function postorderTraversal(root) {
  if (!root) return [];
  const result = [];
  postorderTraversalCursion(root, result);
  return result;
}
function postorderTraversalCursion(root, result) {
  if (!root) return;
  postorderTraversalCursion(root.left);
  postorderTraversalCursion(root.right);
  result.push(root.val);
}
