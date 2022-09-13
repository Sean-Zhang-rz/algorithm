class MyStack {
  constructor() {
    this.queue = []
  }
  push(val){
    this.queue.push(val)
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift())
    }
  }
  pop() {
    return this.queue.shift()
  }
  peek(){
    return this.queue[0]
  }
  isempty(){
    return !this.queue.length;
  }
}