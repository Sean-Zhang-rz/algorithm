class TreeNode {
  constructor(value, left, right) {
    this.value = value || undefined;
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
  setValue(value) {
    this.value = value;
  }
  setLeft(left) {
    this.left = left;
  }
  setRight(right) {
    this.right = right;
  }
}
module.exports = TreeNode;
