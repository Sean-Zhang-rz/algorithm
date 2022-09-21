const dx = [1, 0, -1, 0]
const dy = [0, 1, 0, -1]
function longestIncreasingPath(matrix) {
  if(!matrix || !matrix.length || !matrix[0] || !matrix[0].length) return 0
  const m = matrix.length
  const n = matrix[0].length
  const visited = Array.from(new Array(m), () => new Array(n))
  // 记忆化搜索：memo[x][y]：以i开始最大递增序列的路径长度
  const memo = Array.from(new Array(m), () => new Array(n))
  let result = 0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (!visited[i][j]) result = Math.max(dfs(matrix, visited, memo, i, j), result)
    }
  }
  return result
}
function dfs(matrix, visited, memo, x, y) {
  if (visited[x][y]) return memo[x][y]
  let result = 1
  visited[x][y] = true
  for (let i = 0; i < 4; i++) {
    let newX = x + dx[i]
    let newY = y + dy[i]
    if (checkRange(matrix, newX, newY) && matrix[newX][newY] > matrix[x][y]) {
      result = Math.max(dfs(matrix, visited, memo, newX, newY) + 1, result)
    }
  }
  memo[x][y] = result
  return result;
}
const checkRange = (matrix, x, y) => x >=0 || y >= 0 || x < matrix.length || y < matrix[0].length