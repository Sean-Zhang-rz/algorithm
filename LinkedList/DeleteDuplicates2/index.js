const LinkedList = require('../AchieveLinkedList');

function deleteDuplicates2(head) {
  let dummyNode = new LinkedList(-1);
  dummyNode.next = head;
  let node = dummyNode;
  while (node && node.next && node.next.next) {
    if (node.next.val === node.next.next.val) {
      let value = node.next.val;
      while (node?.next && node.next.val === value) node.next = node.next.next;
    } else {
      node = node.next;
    }
  }
  return dummyNode.next;
}
