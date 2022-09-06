function numIslands(grid) {
  const m = grid?.length
  const n = grid[0]?.length
  let result = 0
  if (!m || !n) return result
  const visited = Array.from(new Array(m), () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === '1' && !visited[i][j]) {
        dfs(grid, visited, i, j)
        result++
      }
    }
  }
  return result
}
function dfs(grid, visited, x, y) {
  visited[x][y] = true
  if (grid[x][y] === '0') return
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  for (let i = 0; i < 4; i++) {
    const newX = dx[i] + x
    const newY = dy[i] + y
    if (checkRange(grid, newX, newY) && !visited[newX][newY]) dfs(grid, visited, newX, newY)
  }
}

const checkRange = (grid, x, y) => x >= 0&& y >= 0 && x < grid.length && y < grid[0].length