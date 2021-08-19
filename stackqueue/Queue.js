const Node = require('./Node');

class Queue {
  constructor() {
    this.head = null;
    this.back = null;
  }

  enqueue(value) {

    let node = new Node(value);

    if (!this.head) {
      this.head = node;
      this.back = node;
    } else {
      this.back.next = node;
      this.back = node;
    }


  }

  dequeue() {
    if (!this.head) { return null; }

    let pointer = this.head;
    this.head = this.head.next;
    return pointer.value;
  }

  peek() {
    if (!this.head) { return null; }

    return this.head;
  }

  isEmpty() {
    if (!this.head) { return true; }

    return false;
  }
}

module.exports = Queue;