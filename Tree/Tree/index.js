class TreeNode {
  constructor(val, left, right) {
    this.val = val || undefined;
    this.left = left || undefined;
    this.right = right || undefined;
  }
  getValue() {
    return this.value;
  }
  getLeft() {
    return this.left;
  }
  getRight() {
    return this.right;
  }
  setValue(val) {
    this.val = val;
  }
  setLeft(left) {
    this.left = left;
  }
  setRight(right) {
    this.right = right;
  }
}
module.exports = TreeNode;
