function maxAreaOfIsland(grid) {
  const m = grid?.length
  const n = grid[0]?.length
  let max = 0
  if (!m || !n) return max
  const visited = Array.from(new Array(m), () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1 && !visited[i][j]) {
        max = Math.max(dfs(grid, visited, i, j), max)
      }
    }
  }
  return max
}
function dfs(grid, visited, x, y) {
  if (grid[x][y] === 0) return 0
  visited[x][y] = true
  let max = 0
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  for (let i = 0; i < 4; i++) {
    const newX = dx[i] + x
    const newY = dy[i] + y
    if (checkRange(grid, newX, newY) && !visited[newX][newY]) {
      max += dfs(grid, visited, newX, newY)
    }
  }
  return max
}
const checkRange = (grid, x, y) => x >= 0 && y >= 0 && x < grid.length && y < grid[0].length