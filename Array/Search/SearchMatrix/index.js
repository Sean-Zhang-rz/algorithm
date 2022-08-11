function searchMatrix(matrix, target) {
  if (matrix.length === 0 || matrix[0].length === 0) return false;
  let m = matrix.length;
  let n = matrix[0].length;
  let l = 0;
  let r = m * n - 1;
  while (l + 1 < r) {
    let mid = Math.floor((r + l) / 2);
    let x = Math.floor(mid / n);
    let y = mid % n;
    if (matrix[x][y] < target) {
      l = mid;
    } else {
      r = mid;
    }
  }
  return matrix[Math.floor(l / n)][l % n] === target || matrix[Math.floor(r / n)][r % n] === target;
}
console.log(
  searchMatrix(
    [
      [1, 3, 5, 7],
      [10, 11, 16, 20],
      [23, 30, 34, 60],
    ],
    60
  )
);
