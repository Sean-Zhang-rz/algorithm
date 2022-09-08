const Node = require('../UndirectedGraph');
function cloneGrapgh(node) {
  if(!node) return null
  const map = new Map()
  const queue = [node]
  const cloneNode = new Node(node.val)
  map.set(node, cloneNode)
  while (queue.length) {
    const curNode = queue.shift()
    for (let neighborNode of curNode.neighbors) {
      // 克隆过前提是neighborNode没被克隆过
      if (!map.has(neighborNode)) {
        const cloneNeighborNode = new Node(neighborNode.val)
        map.set(neighborNode, cloneNeighborNode)
        queue.push(neighborNode)
      }
      // 处理边的关系，需要更新到当前节点curNode的克隆节点的邻接节点
      const cloneCurNode = map.get(curNode)
      const neighborsOfcloneCurNode = cloneCurNode.neighbors
      const cloneNeighborNode = map.get(neighborNode)
      neighborsOfcloneCurNode.push(cloneNeighborNode)
    }
  }
  return cloneNode
}