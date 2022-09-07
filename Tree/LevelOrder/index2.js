function levelOrder(root) {
  const result = [];
  if (!root) return result;
  // 1. 构建队列, 把根节点加入队列
  const queue = [root];
  // 2. while循环，直到队列为空结束，表明全部节点已经被遍历
  while (queue.length) {
    // (1) 确定每一层有多少元素，在进行层序遍历
    const size = queue.length;
    // (2) 存放每一层元素
    const levelList = [];
    // (3) for循环层级遍历：需要分层必须要有For循环
    for (let i = 0; i < size; i++) {
      // (3.1) 出队，以node为圆心画圆找邻接节点
      const node = queue.shift();
      // (3.2) 记录该层节点值
      levelList.push(node.val);
      // (3.3) 如果左子树不为空，左子树入队
      if (node.left) queue.push(node.left);
      // (3.4) 如果右子树不为空，右子树入队
      if (node.right) queue.push(node.right);
    }
    // (4) 记录结果
    result.unshift(levelList);
  }
  return result;
}
