function zigzagLevelOrder (root){
  const result = []
  if (!root) return result
  const queue = [root]
  let index = 2
  while (queue.length) {
    const size = queue.length;
    const levelList = []
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      if (index % 2 === 0) {
        levelList.push(node.val)
      } else {
        levelList.unshift(node.val)
      }
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    result.push(levelList)
    index++
  }
  return result
}