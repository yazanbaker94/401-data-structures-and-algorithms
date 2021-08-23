const Node = require('./Node');

class Stack {
  constructor() {
    this.head = null;

  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;

  }

  pop() {
    if (!this.head) { return null }
    let pointer = this.head
    this.head = this.head.next;

    return pointer.value;
  }

  peek() {
    if (!this.head) { return null }

    return this.head;
  }

  isEmpty() {

    if (!this.head) { return true }

    return false;
  }
}

module.exports = Stack;