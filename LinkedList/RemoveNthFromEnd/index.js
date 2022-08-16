const LinkedList = require('../AchieveLinkedList');

function removeNtheFromEnd (head, n) {
  let dummyNode = new LinkedList(-1)
  dummyNode.next = head
  let fast = head
  let slow = dummyNode
  for (let i = 0; i < n; i++) {
    fast = fast.next
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return dummyNode.next
}