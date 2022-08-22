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

function postorderTraversal(root) {
  if (!root) return [];
  let s1 = [root];
  let s2 = [];
  let res = [];
  while (s1.length) {
    const node = s1.pop();
    s2.push(node.val);
    if (node.left) s1.push(node.left);
    if (node.right) s1.push(node.right);
  }
  while (s2.length) {
    res.push(s2.pop());
  }
  return res;
}
