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

    insertBefore(element, newElement) {


        if (!this.head) {
          let node = new Node(element);
          this.head = node;
    
        } else {
          let newNode = new Node(newElement)
    
          if (this.head === element) {
            newNode.next = this.head
    
            this.head = newNode
          }
          else {
            let currentNode = this.head;
            while (currentNode) {
    
              if (currentNode.next.value === element) {
                newNode.next = currentNode.next
                currentNode.next = newNode;
                return;
              } else {
                currentNode = currentNode.next
    
              }
            }
          }
    
        }
    
      }
 


      insertAfter(element, newElement) {

        if (!this.head) {
          let node = new Node(element);
          this.head = node;
    
        } else {
          let newNode = new Node(newElement)
    
          if (this.head === element) {
            this.head.next = newNode
    
          }
          else {
            let currentNode = this.head;
            while (currentNode) {
    
              if (currentNode.next.value === element) {
                currentNode.next.next = newNode
                return;
              } else {
                currentNode = currentNode.next
    
              }
            }
          }
    
        }
      }
    
    

    }
    

module.exports = LinkedList