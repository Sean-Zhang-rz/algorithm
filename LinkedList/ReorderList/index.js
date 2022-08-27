const LinkedList = require('../AchieveLinkedList');

function reorderList(head) {
  let newHead = getMiddleNode(head);
  let tail = newHead.next;
  newHead.next = null;
  const newTail = reverseList(tail);
  return linkLists(newHead, newTail);
}
function getMiddleNode(head) {
  let slow = head;
  let fast = head;
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}

function reverseList(head) {
  let pre = null;
  while (head) {
    let temp = head.next;
    head.next = pre;
    pre = head;
    head = temp;
  }
  return pre;
}

function linkLists(l1, l2) {
  let dummy = new LinkedList(-1);
  let node = dummy;
  let index = 0;
  while (l1 && l2) {
    if (index % 2 === 0) {
      node.next = l1;
      l1 = l1.next;
    } else {
      node.next = l2;
      l2 = l2.next;
    }
    index++;
    node = node.next;
  }
  if (l1) node.next = l1;
  if (l2) node.next = l2;
  return dummy.next;
}
