function sumRegion(matrix, row1, col1, row2, col2) {
  let m = matrix.length;
  let n = matrix[0].length;
  this.prefixSum = Array.from(Array(m + 1), () => Array(n + 1).fill(0));
  console.log(this.prefixSum);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      this.prefixSum[i + 1][j + 1] =
        this.prefixSum[i][j + 1] + this.prefixSum[i + 1][j] - this.prefixSum[i][j] + matrix[i][j];
    }
  }
  console.log(this.prefixSum);
  return (
    this.prefixSum[row2 + 1][col2 + 1] -
    this.prefixSum[row1][col2 + 1] -
    this.prefixSum[row2 + 1][col1] +
    this.prefixSum[row1][col1]
  );
}
console.log(
  sumRegion(
    [
      [3, 0, 1, 4, 2],
      [5, 6, 3, 2, 1],
      [1, 2, 0, 1, 5],
      [4, 1, 0, 1, 7],
      [1, 0, 3, 0, 5],
    ],
    2,
    1,
    4,
    3
  )
);
