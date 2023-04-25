function mergeKLists(lists) {
  if (!lists?.length) return null;
  let index = 1;
  while (index < lists.length) {
    for (let i = 0; i < lists.length - index; i += index * 2) {
      lists[i] = mergeLists(lists[i], lists[i + index]);
    }
    index *= 2;
  }
  return lists[0];
}

function mergeLists(l1, l2) {
  if (!l1 || !l2) return l1 ? l1 : l2;
  const dummy = new ListNode(-1);
  const cur = dummy.next;
  while (l1 && l2) {
    if (l1.val <= l2.val) {
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
