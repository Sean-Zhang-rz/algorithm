const Node = require('../UndirectedGraph');
function cloneGraph(node) {
  if (!node) return node;
  const map = new Map();
  return dfs(map, node);
}
// 对startNode做克隆
function dfs(map, startNode) {
  if (map.has(startNode)) return map.get(startNode);
  const newNode = new Node(startNode.val);
  map.set(startNode, newNode);
  // 求new node的邻接表
  for (let neighbor of startNode.neighbors) {
    let newNeighbor = dfs(map, neighbor);
    newNode.neighbors.push(newNeighbor);
  }
  return newNode;
}
