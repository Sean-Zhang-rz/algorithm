const LinkedList = require('../AchieveLinkedList');

function addTwoNumbers (l1, l2) {
  let dummyNode = new LinkedList(-1)
  let head = dummyNode
  let carry = 0
  while (l1 || l2) {
    let sum = (l1?.val || 0) + (l2?.val || 0) + carry
    let value = sum % 10
    carry = Math.floor(sum / 10)
    let newNode = new LinkedList(value)
    head.next = newNode
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  if (carry) head.next = new LinkedList(carry)
  return dummyNode.next
}