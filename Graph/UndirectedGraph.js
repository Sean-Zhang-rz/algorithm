class Node {
  constructor(no, value) {
    this.no = no;
    this.value = value;
  }
  getNo() {
    return this.no;
  }
  setNo(no) {
    this.no = no;
  }
  getValue() {
    return this.value;
  }
  setValue(value) {
    this.value = value;
  }
}
// 邻接表 key表示当前节点
class Graph {
  constructor(vertexCount, adjacencyList) {
    this.adjacencyList = adjacencyList || new Map();
    this.marked = Array.from({ length: vertexCount });
    this.connectComponentCount = 0;
  }
  addVertex(v) {
    this.adjacencyList.set(v, []);
  }
  addEdge(u, v) {
    this.adjacencyList.get(u).push(v);
    this.adjacencyList.get(v).push(u);
  }
  printGrapgh(v) {
    for (let key of this.adjacencyList.keys()) {
      const adjNodes = this.adjacencyList.get(key);
      const list = [];
      for (let adjNode of adjNodes) {
        list.push(adjNode.no);
      }
      console.log(key.no + ': ' + '[' + list.join(',') + ']');
    }
  }
  dfs(start) {
    this.marked[start.no] = true;
    console.log('DFS current node:' + start.no + ' value:' + start.value);
    // 遍历邻接节点
    for (let adjNode of this.adjacencyList.get(start)) {
      if (!this.marked[adjNode.no]) {
        this.dfs(adjNode);
      }
    }
  }
  // 以start节点为起点在某一连通分量上DFS
  dfsInComponent(start) {
    this.marked.fill(false);
    this.dfs(start);
  }
  // dfs 全图
  dfsInGraph() {
    this.marked.fill(false);
    for (let startNode of this.adjacencyList.keys()) {
      this.dfs(startNode);
      this.connectComponentCount++;
    }
  }
  bfs(start) {
    const queue = [start];
    this.marked[start.getNo()] = true;
    while (queue.length) {
      const node = queue.shift();
      console.log(node.getNo() + ' ' + node.getValue());
      for (let adjNode of this.adjacencyList.get(node)) {
        if (!this.marked[adjNode.getNo()]) {
          this.marked[adjNode.getNo()] = true;
          queue.push(adjNode);
        }
      }
    }
  }
  bfsInGraph() {
    this.marked.fill(false);
    for (let startNode of this.adjacencyList.keys()) {
      if (!this.marked[startNode.getNo()]) {
        this.bfs(startNode);
        this.connectComponentCount++;
      }
    }
    return this.connectComponentCount;
  }
}
const graph = new Graph(5);
const node0 = new Node(0, 1);
const node1 = new Node(1, 2);
const node2 = new Node(2, 3);
const node3 = new Node(3, 4);
const node4 = new Node(4, 5);
const node5 = new Node(5, 4);
const node6 = new Node(6, 5);
graph.addVertex(node0);
graph.addVertex(node1);
graph.addVertex(node2);
graph.addVertex(node3);
graph.addVertex(node4);
graph.addVertex(node5);
graph.addVertex(node6);
graph.addEdge(node0, node1);
graph.addEdge(node0, node2);
graph.addEdge(node1, node4);
graph.addEdge(node1, node3);
graph.addEdge(node2, node3);
graph.addEdge(node3, node4);
graph.addEdge(node5, node6);
// console.log(graph.printGrapgh());
// graph.dfsInGraph(node0)

// graph.dfsInComponent()
console.log(graph.bfs(node0));
console.log('--------------------');
console.log(graph.bfsInGraph());
