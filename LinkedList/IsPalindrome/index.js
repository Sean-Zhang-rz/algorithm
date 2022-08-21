const LinkedList = require('../AchieveLinkedList');
function isPalindrome (head) {
  let mid = getMiddle(head)
  let tail = reverseList(mid.next)
  mid.next = null
  while (head && tail) {
    if (head?.val !== tail?.val) return false
    head = head.next
    tail = tail.next
  }
  return true
}
function getMiddle(head) {
  let fast = head.next
  let slow = head
  while (fast) {
    fast = fast.next.next
    slow = slow.next
  }
  return slow
}
function reverseList (head) {
  let pre = null
  while (head) {
    let temp = head.next
    head.next = pre
    pre = head
    head = temp
  }
  return pre
}