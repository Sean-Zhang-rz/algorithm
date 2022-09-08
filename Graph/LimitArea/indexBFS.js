function Point (x, y) {
  this.x = x
  this.y = y
}
function limitArea(board) {
  const m = board?.length
  const n = board[0]?.length
  if (!m || !n) return null
  const visited = Array.from(new Array(m), () => new Array(n))
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (isOutlet(m, n, i, j) && !visited[i][j] && board[i][j] === 'O') {
        bfs(board, visited, i, j)
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 'X') continue
      if (board[i][j] === 'O') {
        board[i][j] = 'X'
      } else if (board[i][j] === 'B') {
        board[i][j] = 'O'
      }
    }
  }
  return board
}
function bfs (board, visited, x, y) {
  const queue = [new Point(x, y)]
  visited[x][y] = true
  board[x][y] = 'B'
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  while (queue.length) {
    const curNode = queue.shift()
    for (let i = 0; i < 4; i++) {
      const newX = dx[i] + curNode.x
      const newY = dy[i] + curNode.y
      if (checkRange(board, newX, newY) && !visited[newX][newY] && board[newX][newY] === 'O') {
        visited[newX][newY] = true
        board[newX][newY] = 'B'
        queue.push(new Point(newX, newY))
      }
    }
  }
}
const checkRange = (board, x, y) => x >=0 && y >=0 && x < board.length && y < board[0].length
const isOutlet = (m, n, x, y) => x === 0 || y === 0 || x === m - 1 || y === n - 1