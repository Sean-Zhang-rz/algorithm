function minDepth(root) {
  if (!root) return 0
  const queue = [root]
  let min = 0
  while (queue.length) {
    const size = queue.length
    min++
    for(let i = 0; i < size; i++) {
      const node = queue.shift()
      if (!node.left && !node.right) return min
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
  }
  return min
}