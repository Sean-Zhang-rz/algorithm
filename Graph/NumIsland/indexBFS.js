function Point (x, y) {
  this.x = x
  this.y = y
}
function numIsland (grid) {
  const m = grid?.length
  const n = grid[0]?.length
  let result = 0
  if (!m || !n) return result
  const visited = Array.from(new Array(m), () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        bfs(grid, visited, i, j)
        result++
      }
    }
  }
  return result
}

const checkRange = (grid, x, y) => x >=0 && y >=0 && x < grid.length && y < grid[0].length

function bfs (grid, visited, x, y) {
  const queue = [new Point(x, y)]
  visited[x][y] = true
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  while (queue.length) {
    const curNode = queue.shift()
    for (let i = 0; i < 4; i++) {
      const newX = dx[i] + curNode.x
      const newY = dy[i] + curNode.y
      const newPoint = new Point(newX, newY)
      if (checkRange(grid, newX, newY) && !visited[newX][newY] && grid[newX][newY] === '1') {
        visited[newX][newY] = true
        queue.push(newPoint)
      }
    }
  }
}