/**
* @param {number[][]} matrix
*/
var NumMatrix = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  this.prefixSum = Array.from(Array(m), () => new Array(n + 1).fill(0));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.prefixSum[i][j + 1] = this.prefixSum[i][j] + matrix[i][j]
    }
  }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function (row1, col1, row2, col2) {
  if (row1 > row2 || col1 > col2) return -1
  let sum = 0;
  console.log(this.prefixSum);
  for (let i = row1; i <= row2; i++) {
    sum += this.prefixSum[i][col2 + 1] - this.prefixSum[i][col1]
  }
  return sum
};
const o = new NumMatrix([[1, 2, 3], [2, 3, 4], [4,5,6]])
console.log(o.sumRegion(1,1, 2,2));