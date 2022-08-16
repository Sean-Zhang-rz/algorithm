function hasCycle(head) {
  if (!head || !head.next) return null;
  let fast = head;
  let slow = head;
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
    if (fast === slow) {
      let cur = head;
      while (cur != slow) {
        cur = cur.next;
        slow = slow.next;
      }
      return cur;
    }
  }
  return null;
}
