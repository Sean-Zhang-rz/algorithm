function insertionSortList(head) {
  if (!head) return null
  let dummy = new ListNode(-1)
  while (head) {
    let node = dummy
    while (node.next && node.next.val < head.val) node = node.next
    let temp = head.next
    head.next = node.next
    node.next = head
    head = temp
  }
  return dummy.next
}