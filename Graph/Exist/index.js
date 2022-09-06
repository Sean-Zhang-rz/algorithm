function exist (board, word) {
  const m = board.length
  const n = board[0].length
  if (!board || !board[0] !m || !n) return false
  const visited = Array.from(new Array(m), () => new Array(n))
  for(let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === word[0]) {
        const hasWord = dfs(board, word, visited, i, j, 0)
        if (hasWord) return true
      } 
    }
  }
  return false
}
function dfs(board, word, visited, x, y, index) {
  if (board[x][y] !== word[index]) return false
  visited[x][y] = true
  if (index === word.length - 1) retrun true
  const dx = [1, 0, -1, 0]
  const dy = [0, 1, 0, -1]
  const newX = dx[i] + x
  const newY = dy[i] + y
  let hasWord = false
  for (let i = 0; i < 4; i++) {
    if (checkRange(board, newX, newY) && !visited[newX][newY]) {
      hasWord = hasWord || dfs(board, word, visited, newX, newY, index + 1)
    }
  }
  visited[x][y] = false
  return hasWord
}
function checkRange(board, x, y){
  return x >=0 && y >=0 && x < board.length && y < board[0].length
}
