function Point (x, y) {
  this.x = x
  this.y = y
}
function bfsInMatrix(matrix){
  const m = matrix?.length
  const n = matrix[0]?.length
  if (!m || !n) return 
  const visited = Array.from(new Array(m), () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const startPoint = new Point(i, j)
      if (condition && !visited[i][j]) bfs(matrix, visited, startPoint)
    }
  }
}

function bfs (matrix, visited, point) {
  const queue = [point]
  visited[point.x][point.y] = true
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  while (queue.length) {
    const curNode = queue.shift()
    for (let i = 0; i < 4; i++) {
      const newPoint = new Point(curNode.x + dx[i], curNode.y + dy[i])
      if (checkRange(matrix, newPoint) && !visited[newPoint.x][newPoint.y] && condition) {
        visited[newPoint.x][newPoint.y] = true
        queue.push(newPoint)
      }
    }
  }
}
function checkRange(martrix, {x, y}) {
  return x >= 0 && y >=0 && x < martrix.length && y < martrix[0].length
}
