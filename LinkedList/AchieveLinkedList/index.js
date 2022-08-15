function Node(val) {
  this.val = val;
  this.next = null;
}

function LinkedList() {
  this.head = new Node(null);
  this.tail = new Node(null);
  this.length = 0

  this.getNode = function (index) {
    if (index < 0 || index > this.length) return
    let cur = this.head;
    for (let i = 0; i < index; i++) {
      cur = cur.next;
    }
    return cur
  }

  this.getValue = function (index) {
    const node = this.getNode(index)
    return node.val
  }

  this.add = function (index, val) {
    if (index < 0 || index > this.length) throw Error('越界了')
    const newNode = new Node(val)
    this.length++
    if (index === 0) {
      newNode.next = this.head
      this.head = newNode
      return
    }
    const node = this.getNode(index)
    const preNode = this.getNode(index - 1)
    newNode.next = node
    preNode.next = newNode
  }
  this.addWithDummyNode = function (index, val) {
    if (index < 0 || index > this.length) throw Error('越界了')
    this.length++
    let newNode = new Node(val)
    let dummyNode = new Node(-1)
    dummyNode.next = this.head
    let preNode = dummyNode
    while (index-- !== 0) preNode = preNode.next
    let curNode = preNode.next
    preNode.next = newNode
    newNode.next = curNode
    head = dummyNode.next
  }

  this.append = function (val) {
    if (index < 0 || index > this.length) throw Error('越界了')
    this.add(this.length, val)
  }

  this.set = function (index, val) {
    if (index < 0 || index > this.length) throw Error('越界了')
    const node = this.getNode(index)
    node.val = val
  }

  this.removeByIndex = function (index) {
    if (index < 0 || index > this.length) throw Error('越界了')
    this.length--;
    if (index === 0) {
      this.head = this.head.next
      return
    }
    const preNode = this.getNode(index - 1)
    const nextNode = preNode.next.next;
    preNode.next = nextNode;
  }

  this.removeByIndexWithDummyNode = function (index) {
    if (index < 0 || index > this.length) throw Error('越界了')
    this.length--
    
    // build dummy node
    let dummyNode = new Node(-1)
    dummyNode.next = this.head
    let preNode = dummyNode

    // search前一个节点
    while (index-- !== 0) preNode = preNode.next

    let nextNode = preNode.next.next
    preNode.next = nextNode
    
    this.head = dummyNode.next
    
  }

  this.getLength = function () {
    return this.length
  }

  this.getLengthByTraverse = function () {
    let cur = this.head
    let len = 0;
    while (cur.next != null) {
      cur = cur.next;
      len++;
    }
    return len + 1
  }
}

const ll = new LinkedList()
ll.add(0, 1)
ll.add(1, 2)
ll.add(0, 3)
ll.removeByIndexWithDummyNode(1)
console.log(ll.getNode(1));
ll.add(2, 4)
ll.addWithDummyNode(2, 1)
console.log(ll.getLength());