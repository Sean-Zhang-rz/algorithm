function getMid(head) {
  let slow = head;
  let fast = head.next;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
function merge(l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  const dummy = new ListNode(-1);
  let cur = dummy;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      cur.next = l1;
      l1 = l1.next;
    } else {
      cur.next = l2;
      l2 = l2.next;
    }
    cur = cur.next;
  }
  cur.next = l1 ? l1 : l2;
  return dummy.next;
}
function sortList(head) {
  if (!head || !head.next) return head;
  const mid = getMid(head);
  const right = sortList(mid.next);
  mid.next = null;
  const left = sortList(head);
  return merge(head, right);
}
