'use strict';

const Node = require('./node');



class LinkedList {
  constructor() {
    this.head = null;

  }

  insert(value) {

    // this.head = new Node(value, this.head);
    let node = new Node();
    node.value = value;
    node.next = this.head;
    this.head = node;

  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;

    } else {
      let thisNode = this.head;
      while (thisNode.next) {
        thisNode = thisNode.next;
      }
      thisNode.next = newNode;

    }

  }

}


let zipLists = (listOne, listTwo) => {
  let listThree = new LinkedList()
  let pointer1 = listOne.head;
  let pointer2 = listTwo.head;

  while (pointer1 || pointer2) {
    if (pointer1) { listThree.insert(pointer1.value); pointer1 = pointer1.next }
    if (pointer2) { listThree.insert(pointer2.value); pointer2 = pointer2.next }

    // if (pointer1) { list3.append(pointer1.value); pointer1 = pointer1.next }
    // if (pointer2) { list3.append(pointer2.value); pointer2 = pointer2.next }
  }
  return listThree;

}






module.exports = {
  LinkedList,
  zipLists
}