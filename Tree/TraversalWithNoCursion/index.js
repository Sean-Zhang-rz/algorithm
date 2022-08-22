function preorderTraversal(root) {
  if (!root) return [];
  const res = [];
  const nodeStack = [];
  nodeStack.push(root);
  while (nodeStack.length) {
    const node = nodeStack.pop();
    res.push(node.val);
    if (node.right) nodeStack.push(node.right);
    if (node.left) nodeStack.push(node.left);
  }
  return res;
}
