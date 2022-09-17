// 有错误
function TreeNode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
}

function getPositionAfterNTimesOperation(n) {
  // const result = [];
  // if (n <= 0 || (n < 11 && n % 2 === 1)) return result;
  // const list = [];
  // const move = [-1, 1];
  // dfs(result, list, move, n, 0);
  // return result;
  const root = new TreeNode(0);
  let nodeLeft = root;
  let nodeRight = root;
  for (let i = 0; i <= n; i++) {
    nodeLeft.left = new TreeNode(-1);
    nodeLeft.right = new TreeNode(1);
    nodeLeft = nodeLeft.left;
    nodeRight.left = new TreeNode(-1);
    nodeRight.right = new TreeNode(1);
    nodeRight = nodeRight.right;
  }

  console.log(root);
}
function dfs(result, list, move, n, pos) {
  // if (list.length === n) {
  //   let sum = 0;
  //   for (let i = 0; i < list.length; i++) {
  //     if (sum % 11 === 0) sum = 0;
  //     sum += list[i];
  //   }
  //   // console.log(sum);
  //   if (sum === 0) {
  //     result.push([...list]);
  //     return;
  //   }
  // }
  // for (let i = pos; i <= n; i++) {
  //   list.push(move[i % 2]);
  //   dfs(result, list, move, n, i + 1);
  //   list.pop();
  // }
}
console.log(getPositionAfterNTimesOperation(4));
// console.log(getPositionAfterNTimesOperation(11));
