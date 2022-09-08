function findCircleNum(isConnected){
  const marked = [] 
  let count = 0
  for (let i = 0; i < isConnected.length; i++) {
    if (!marked[i]) {
      bfs(isConnected, marked, i)
      count++
    }
  }  
  return count
}
function bfs(isConnected, marked, nodeNum) {
  const queue = [nodeNum]
  marked[nodeNum] = true
  while (queue.length) {
    const curCityNo = queue.shift()
    const size = isConnected[0].length
    for (let i = 0; i < size; i++) {
      if (isConnected[curCityNo][i] === 1 && !marked[i]) {
        marked[i] = true
        queue.push(i)
      }
    }
  }
}