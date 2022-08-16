const LinkedList = require('../AchieveLinkedList');

function deleteDuplicates (head) {
  if (!head) return null
  let node = head
  while (node && node.next) {
    if (node.val = node.next.val) {
      node.next = node.next.next
    } else {
      node = node.next
    }
  }
  return head
}