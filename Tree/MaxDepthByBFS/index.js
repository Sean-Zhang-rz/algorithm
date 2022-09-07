function maxDepth (root) {
  if (!root) return 0
  const queue = [root]
  let max = 0
  while (queue.length) {
    const size = queue.length
    for (let i = 0; i < size; i++) {
      const node = queue.shift()
      max++
      if (!node.left && !node.right && !queue.length) return max
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
   }
   return max
}