const LinkedList = require('../AchieveLinkedList');
function addTwoNumbers(l1, l2) {
  let dummy = new LinkedList(-1);
  const stack1 = [];
  const stack2 = [];
  while (l1) {
    stack1.push(l1.val);
    l1 = l1.next;
  }
  while (l2) {
    stack2.push(l2.val);
    l2 = l2.next;
  }
  let carry = 0;
  while (stack1.length || stack2.length || carry !== 0) {
    const num1 = stack1.length ? stack1.pop() : 0;
    const num2 = stack2.length ? stack2.pop() : 0;
    let sum = num1 + num2 + carry;
    let value = sum % 10;
    carry = Math.floor(sum / 10);
    let newNode = new LinkedList(value);
    let temp = dummy.next;
    dummy.next = newNode;
    newNode.next = temp;
    console.log(newNode);
  }
  return dummy.next;
}
const ll1 = new LinkedList([7, 2, 4, 3]);
const ll2 = new LinkedList([5, 6, 4]);
console.log(addTwoNumbers(ll1.getNode(0), ll2.getNode(0)));
