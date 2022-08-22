function preorderTraversal1(root) {
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

function preorderTraversal2(root) {
  if (!root) return [];
  let nodeStack = [];
  let res = [];
  let node = root;
  while (nodeStack.length || node) {
    while (node) {
      res.push(node.val);
      nodeStack.push(node);
      node = node.left;
    }
    node = nodeStack.pop();
    node = node.right;
  }
  return res;
}

function inorderTraversal(root) {
  if (!root) return [];
  let res = [];
  let nodeStack = [];
  let node = root;
  while (node.nodeStack.length || node) {
    while (node) {
      nodeStack.push(node);
      node = node.left;
    }
    node = nodeStack.pop();
    res.push(node.val);
    node = node.right;
  }
  return res;
}
