function searchMatrix2(matrix, target) {
  let m = matrix.length;
  let n = matrix[0].length;
  if (m === 0 || n === 0) return -1;
  let x = 0;
  let y = n - 1;
  while (x < m && y >= 0) {
    if (matrix[x][y] === target) {
      return true;
    } else if (matrix[x][y] > target) {
      y--;
    } else {
      x++;
    }
  }
  return false;
}
