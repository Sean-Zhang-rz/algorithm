function nLevelOrder(root){
  const result = []
  if (!root) return result
  const queue = [root]
  while (queue.length) {
    const levelList = []
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      levelList.push(node.val)
      for (let i = 0; i < node.children.length; i++) {
        queue.unshift(node.children[i])
      }
    }
    result.push(levelList)
  }
  return result
}