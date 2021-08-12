'use strict';

const Node = require('./node');

class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        // create a node for this value
        let newNode = new Node(value);
       
        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            // reached the end of the linkedlist
            currentNode.next = newNode;
        }
    }

    insert(value) {

        this.head = new Node(value, this.head);
    
      }

      includes(value) {
          let initialVal = this.head;
          while(initialVal) {
              return (initialVal === value ? true : initialVal = initialVal.next )
          } return false
      }

    
    }
    
    
  
    

module.exports = LinkedList