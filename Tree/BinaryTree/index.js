const TreeNode = require('../Tree');
const buildTree = require('../BuildTreeByPreAndInOrder');
class BinaryTree {
  constructor(root) {
    this.root = root;
  }
  // constructor(value) {
  //   this.root = new TreeNode(value);
  // }

  find(value) {
    let node = this.root;
    while (node) {
      if (node.getValue() === value) {
        return true;
      } else if (node.getValue() > value) {
        node = node.left;
      } else {
        node = node.right;
      }
    }
    return false;
  }
}
// const root = buildTree([4, 2, 1, 3, 7], [1, 2, 3, 4, 7]);
const root = new TreeNode(4);
const node1 = new TreeNode(2);
const node2 = new TreeNode(7);
root.setLeft(node1);
root.setRight(node2);
const node3 = new TreeNode(1);
const node4 = new TreeNode(3);
node1.setLeft(node3);
node1.setRight(node4);

let bst = new BinaryTree(root);
console.log(bst.find(3));
console.log(bst.find(20));
