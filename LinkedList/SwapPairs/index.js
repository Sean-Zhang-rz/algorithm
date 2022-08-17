const LinkedList = require('../AchieveLinkedList');
function swapPairs(head) {
  if (!head) return null;
  let dummy = new LinkedList(-1);
  dummy.next = head;
  let node = dummy;

  while (node && node.next && node.next.next) {
    let pre = node;
    let curNode = pre.next;
    let temp = curNode.next;
    curNode.next = temp.next;
    temp.next = pre.next;
    pre.next = temp;
    node = curNode;
  }
  return dummy.next;
}
