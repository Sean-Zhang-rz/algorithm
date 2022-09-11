function Point(x, y) {
  this.x = x;
  this.y = y;
}
function findPathInMaze(maze, start, end) {
  const m = maze?.length;
  const n = maze[0]?.length;
  const result = [];
  if (!m || !n) return result;
  const visited = Array.from(new Array(m), () => new Array(n));
  // for (let i = 0; i < m; i++) {
  //   for (let j = 0; j < n; j++) {
  //     if (!visited[i][j])
  //   }
  // }
  bfs(maze, visited, start, end);
  return result;
}

function bfs(maze, visited, start, end) {
  const queue = [new Point(start, end)];
  visited[start][end] = true;
  while (queue.length) {
    const node = queue.shift();
    const size = queue.length;
    for (let i = 0; i < size; i++) {}
  }
}
