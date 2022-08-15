const LinkedList = require('../AchieveLinkedList');

function getMiddleNode(head) {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  if (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

const list = new LinkedList([1, 2, 3, 4, 5, 6]);
console.log(getMiddleNode(list.getNode(0)));
