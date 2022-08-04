var NumMatrix = function (matrix) { // 二维前缀和代表原点（0, 0）为左上顶点，(i, j)为右下点的矩阵内所有元素之和
  const m = matrix.length;
  const n = matrix[0].length;
  this.prefixSum = Array.from(Array(m + 1), () => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.prefixSum[i + 1][j + 1] = this.prefixSum[i][j + 1] + this.prefixSum[i + 1][j] - this.prefixSum[i][j] + matrix[i][j]
    }
  }
  console.log(this.prefixSum);
};
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  if (row1 > row2 || col1 > col2) return -1
  return this.prefixSum[row2 + 1][col2 + 1] - this.prefixSum[row1][col2 + 1] - this.prefixSum[row2 + 1][col1] + this.prefixSum[row1][col1]
};
const o = new NumMatrix([[1, 2, 3], [2, 3, 4], [4, 5, 6]])
console.log(o.sumRegion(1, 1, 2, 2));