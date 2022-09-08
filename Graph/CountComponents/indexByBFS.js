function countComponents(n, edges) {
  let count = 0;
  const adj = new Map();
  for (let i = 0; i < n; i++) {
    adj.set(i, []);
  }
  for (let i = 0; i < edges.length; i++) {
    adj.get(edges[i][0]).push(edges[i][1]);
    adj.get(edges[i][1]).push(edges[i][0]);
  }
  const marked = [];
  for (let i = 0; i < n; i++) {
    if (!marked[i]) {
      bfs(adj, marked, i);
      count++;
    }
  }
  return count;
}
function bfs(adj, marked, nodeNum) {
  const queue = [nodeNum];
  marked[nodeNum] = true;
  while (queue.length) {
    const nodeNo = queue.shift();
    for (let adjNodeNo of adj.get(nodeNo)) {
      if (!marked[adjNodeNo]) {
        marked[adjNodeNo] = true;
        queue.push(adjNodeNo);
      }
    }
  }
}
