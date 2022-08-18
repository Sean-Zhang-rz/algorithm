const LinkedList = require('../AchieveLinkedList');

function rotateRight (head, k) {
  const length = getLength(head)
  k = k % length
  if (k === 0) return head
  let dummy = new LinkedList(-1)
  dummy.next = head
  let node = dummy
  let fast = node
  let slow = node
  for (let i = 0; i < k; i++) {
    fast = fast.next
  }
  while (fast && fast.next) {
    slow = slow.next
    fast = fast.next
  }
  let tail = slow.next
  slow.next = null
  fast.next = dummy.next
  return tail
}
function getLength(head) {
  let len = 0
  while (head) {
    head = head.next
    len++
  }
  return len
}