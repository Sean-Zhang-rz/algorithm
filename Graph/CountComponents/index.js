function countComponents (n, edges) {
  let count = 0
  const adj = new Map()
  for (let i = 0; i < n; i++) {
    adj.set(i, [])
  }
  for (let i = 0; i < edges.length; i++) {
    adj.get(edges[i][0]).push(edges[i][1])
    adj.get(edges[i][1]).push(edges[i][0])
  }
  const marked = []
  for (let i = 0; i < n; i++) {
    if (!marked[i]) {
      dfs(adj, i, marked)
      count++
    }
  }
  return count
}

function dfs(adj, no, marked) {
  marked[no] = true
  for (let adjNodeNo in adj) {
    if (!marked[no]) dfs(adj, adjNodeNo, marked)
  }
}