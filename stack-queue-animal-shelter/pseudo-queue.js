const Stack = require("./Stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.head !== null) {
      let removedItem = this.stack1.pop(); //remove last in
      this.stack2.push(removedItem);
      // this.stack1.head = this.stack1.head.next;
    }
    return this.stack2.pop();
  }

  includes(value) {
    let checkingValue = this.stack1.head;
    while (checkingValue) {
      return checkingValue === value
        ? true
        : (checkingValue = checkingValue.next);
    }
    return false;
  }
}

module.exports = PseudoQueue;