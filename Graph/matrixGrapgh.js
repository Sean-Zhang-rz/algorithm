class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}
function checkRange(matrix, point) {
  return point.x >= 0 && point.x < matrix.length && point.y >= 0 && point.y < matrix[0].length;
}
function dfsInMatrix(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (!matrix || !m || !matrix[0] || !n) return;
  const visited = Array.from(new Array(m), () => new Array(n));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const start = new Point(i, j);
      if (condition && !visited[i][j]) dfs(matrix, visited, start);
    }
  }
}
function dfs(matrix, visited, point) {
  // 剪枝
  if (condition) {
    // do something
  }
  visited[point.x][point.y] = true;
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];
  for (let i = 0; i < 4; i++) {
    const newPoint = new Point(point.x + dx[i], point.y + dy[i]);
    if (checkRange(matrix, newPoint) && !visited[newPoint.x][newPoint.y]) {
      dfs(matrix, visited, newPoint);
    }
  }
}
