const LinkedList = require('../AchieveLinkedList');

function reverseList(head, left, right) {
  if (!head) return null;
  let dummy = new LinkedList(-1);
  dummy.next = head;
  let pre = dummy;
  for (let i = 0; i < left - 1; i++) {
    pre = pre.next;
  }
  let curNode = pre.next;
  for (let i = left; i < right; i++) {
    let temp = curNode.next;
    curNode.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
  }
  return dummy.next;
}
const l = new LinkedList([1, 2, 3, 4, 5]);
const list = l.getNode(0);
console.log(reverseList(list, 2, 4));
