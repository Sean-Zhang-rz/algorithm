const LinkedList = require('../AchieveLinkedList');

function hasCycle(head) {
  if (!head || head.next) return false;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) return true;
  }
  return false;
}
