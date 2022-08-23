const TreeNode = require('../Tree/index');

function buildTree(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
}

function helper(preorder, pstart, pend, inorder, istart, iend) {
  if (pstart > pend || istart > iend) return null;
  // 1. 先序根节点
  let root = new TreeNode(preorder[pstart]);
  // 2. 中序划分左右
  // 2a. 在中序里找根节点
  let rootPos = findRoots(inorder, preorder[pstart]);
  // 2b. 划分左子树，中序左子树区间[istart, rootPos - 1]
  let leftNodeCounts = rootPos - istart;
  root.left = helper(
    preorder,
    pstart + 1,
    leftNodeCounts + pstart,
    inorder,
    istart + 1,
    rootPos - 1
  );
  // 2c. 划分右子树，中序右子树区间[rootPos + 1, iend]
  root.right = helper(preorder, leftNodeCounts + pstart + 1, pend, inorder, rootPos + 1, iend);

  return root;
}
function findRoots(inorder, value) {
  for (let i = 0; i < inorder.length; i++) {
    if (inorder[i] === value) return i;
  }
  return -1;
}
