// 时间O(nlogn) 空间O(n)
// 归并排序
function ListNode(val, next) {
  this.val = val
  this.next = next
}
function sortList(head) {
  if (!head || !head.next) return null
  // 1. 求链表中点
  const mid = getMid(node)
  // 2. 递归求左右链表
  const right = sortList(mid.next)
  mid.next = null
  const left = sortList(head)
  // 3. 合并两个有序链表
  return merge(left, right)
}
function getMid(node) {
  let slow = node
  let fast = node.next
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next.next
  }
  return slow
}
function merge(l1, l2) {
  let dummy = new ListNode(-1)
  let node = dummy
  while (l1 && l2) {
    if (l1.val < l2.val) {
      node.next = l1
      l1 = l1.next
    } else {
      node.next = l2
      l2 = l2.next
    }
    node = node.next
  }
  if (l1) node.next = l1
  if (l2) node.next = l2
  return dummy.next
}
