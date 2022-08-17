const LinkedList = require('../AchieveLinkedList');
function reverseKGroup(head, k) {
  if (!head) return null;
  let dummy = new LinkedList(-1);
  dummy.next = head;
  let node = dummy;
  while (node && node.next) {
    let check = node;
    let pre = node;
    for (let i = 0; i < k; i++) {
      if (!check.next) return dummy.next;
      check = check.next;
    }
    let curNode = pre.next;
    for (let i = 0; i < k - 1; i++) {
      let temp = curNode.next;
      curNode.next = temp.next;
      temp.next = pre.next;
      pre.next = temp;
    }
    node = curNode;
  }
  return dummy.next;
}
