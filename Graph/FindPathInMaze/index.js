function Point(x, y) {
  this.x = x;
  this.y = y;
}
function findPathInMaze(maze, start, end) {
  const m = maze.length;
  const n = maze[0].length;
  const result = [];
  if (!maze || !m || !maze[0] || !n) return result;
  const visited = Array.from(new Array(m), () => new Array(n));
  const path = [];
  dfs(result, path, maze, visited, start, end);
  // dfsOne(path, maze, visited, start, end);
  // return path
  return result;
}

function dfs(result, path, maze, visited, cur, end) {
  // 剪枝
  if (maze[cur.x][cur.y] === 1) return;
  // 标记
  visited[cur.x][cur.y] = true;
  // 找到单一解
  if (cur.x === end.x && cur.y === end.y) {
    result.push([...path]);
    return;
  }
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  for (let i = 0; i < 4; i++) {
    const newPoint = new Point(cur.x + dx[i], cur.y + dy[i]);
    if (checkRange(maze, newPoint) && !visited[newPoint.x][newPoint.y]) {
      path.push(newPoint);
      dfs(result, path, maze, visited, newPoint, end);
      path.pop();
    }
  }
}
// function dfsOne(path, maze, visited, cur, end) {
//   // 剪枝
//   if (maze[cur.x][cur.y] === 1) return;
//   // 标记
//   visited[cur.x][cur.y] = true;
//   // 找到单一解
//   if (cur.x === end.x && cur.y === end.y) {
//     return path
//   }
//   const dx = [1, 0, -1, 0];
//   const dy = [0, 1, 0, -1];

//   for (let i = 0; i < 4; i++) {
//     const newPoint = new Point(cur.x + dx[i], cur.y + dy[i]);
//     if (checkRange(maze, newPoint) && !visited[newPoint.x][newPoint.y]) {
//       path.push(newPoint);
//       dfsOne(path, maze, visited, newPoint, end);
//       path.pop();
//     }
//   }
// }
function checkRange(matrix, point) {
  return point.x >= 0 && point.x < matrix.length && point.y >= 0 && point.y < matrix[0].length;
}

const maze = [
  [0, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 1, 0, 0],
  [0, 0, 1, 0],
];
const start = new Point(0, 0);
const end = new Point(3, 3);
const result = findPathInMaze(maze, start, end);
console.log(result);
