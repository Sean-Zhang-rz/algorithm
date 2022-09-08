function findCircleNumber(isConnectd) {
  let count = 0
  const length = isConnectd.length
  const marked = new Array(length)
  for (let i = 0; i < length; i++) {
    if (!marked[i]) {
      dfs(isConnectd, i, marked)
      count++
    }
  }
  return count
}
function dfs(adj, no, marked) {
  marked[no] = true
  const values = adj[no]
  for (let i = 0; i < values.length; i++) {
    if (values[i] === 1 && !marked[i]) dfs(adj, i, marked)
  }
}