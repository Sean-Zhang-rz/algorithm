const LinkedList = require('../AchieveLinkedList');

function reverseList(head) {
  if (!head) return null;
  let pre = null;
  while (head) {
    let temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }
  return prev;
}
