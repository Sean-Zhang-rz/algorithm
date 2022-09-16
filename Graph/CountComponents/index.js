function countComponents(n, edges){
  let count = 0;
  const adj = new Map()
  for (let i = 0; i < n; i++) {
    adj.set(i, [])
  }
  for (let i = 0; i < edges.length; i++) {
    adj.get(edges[i][0]).push(edges[i][1]);
    adj.get(edges[i][1]).push(edges[i][0]);
  }
  const visited = []
  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(adj, i, visited)
      count++
    }
  }
  return count
}
function dfs(adj, no, visited) {
  visited[no] = true
  for (let adjNodeNo in adj.get(no)) {
    if (!visited[adjNodeNo]) dfs(adj, adjNodeNo, visited)
  }
}