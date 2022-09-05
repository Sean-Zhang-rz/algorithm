function validTree(n, edges) {
  if (!n) return false
  if (edges !== n - 1) return false
  let count = 0;
  const adj = new Map()
  for (let i = 0; i < n; i++) {
    adj.set(i, [])
  }
  for (let i = 0; i < edges.length; i++) {
    adj.get(edges[i][0].push(edges[i][1]))
    adj.get(edges[i][1].push(edges[i][0]))
  }
  const marked = []
  for (let i = 0; i < n; i++) {
    if (!marked[i]) {
      dfs(adj, i, marked)
      count++
    }
  }
  return count === 1
}
function dfs(adj, no, marked) {
  marked[no] = true
  for (let adjNode in adj.get(no)) {
    if (!marked[no]) dfs(adj, adjNode, marked)
  }
}