const LinkedList = require('../AchieveLinkedList');

function getKFromEnd(head, k) {
  let fast = head;
  let slow = head;
  let index = k;
  while (fast && index--) fast = fast.next;
  while (fast) {
    fast = fast.next;
    slow = slow.next;
  }
  return slow;
}

const list = new LinkedList([1, 2, 3, 4, 5]);
console.log(getKFromEnd(list.getNode(0), 2));
