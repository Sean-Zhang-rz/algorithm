const LinkedList = require('../AchieveLinkedList');

function getMiddleNode(head) {
  let fast = head;
  let slow = head.next;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

const list = new LinkedList([1, 2, 3, 4, 5, 6]);
console.log(getMiddleNode(list.getNode(0)));
