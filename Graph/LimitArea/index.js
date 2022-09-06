function limitArea (board) {
  const m = board?.length
  const n = board?.[0]?.length
  if (!m || !n) return
  const visited = Array.from(new Array(m), () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (isOutlet(m, n, i, j) && board[i][j] === 'O' && !visited[i][j]) {
        dfs(board, visited, i, j)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; i < n; j++) {
      if (board[i][j] === 'X') continue
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === 'B') {
        board[i][j] === 'O'
      }
    }
  }
  return board
}
function dfs(board, visited, x, y) {
  if (board[x][y] === 'X') return
  visited[x][y] = true
  if (board[x][y] === 'O') board[x][y] = 'B'
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  for (let i = 0; i < 4; i++) {
    const newX = dx[i] + x
    const newY = dy[i] + y
    if (checkRange(board, newX, newY) && !visited[newX][newY]) dfs(board, visited, newX, newY)
  }
}
const checkRange = (board, x, y) => x >= 0 && y >= 0 && x < board.length && y < board[0].length
const isOutlet = (m, n, x, y) => x === 0 || y === 0 || x === m - 1 || y === n - 1 