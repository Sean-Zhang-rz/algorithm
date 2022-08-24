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
  add(value) {
    if (!this.root) {
      this.root = new TreeNode(value);
      return true;
    }
    let node = this.root;
    while (node) {
      if (node.getValue() === value) {
        return false;
      } else if (node.getValue() > value) {
        if (!node.getLeft()) {
          node.setLeft(new TreeNode(value));
          return true;
        }
        node = node.getLeft();
      } else {
        if (!node.getRight()) {
          node.setRight(new TreeNode(value));
          return true;
        }
        node = node.getRight();
      }
    }
  }
  deleteNode(key) {
    if (!this.root) return this.root;
    if (this.root.val < key) {
      this.root.right = this.deleteNode(this.root.right, key);
    } else if (this.root.val > key) {
      this.root.left = this.deleteNode(this.root.left, key);
    } else {
      if (!this.root.left && !this.root.right) {
        this.root = null;
      } else if (!this.root.right) {
        this.root = this.root.left;
      } else if (!this.root.left) {
        this.root = this.root.right;
      } else {
        const minRightNode = getMinValueTreeNode(this.root.right);
        this.root.val = minRightNode.val;
        this.root.right = deleteNode(this.root.right, minRightNode.val);
      }
    }
    return this.root;
  }
  getMinValueTreeNode(root) {
    if (!root.left) return root;
    return getMinValueTreeNode(root.left);
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
