const Node = require('./Node')

class BinaryTree {
  constructor(root = null) {
      this.root = root;
  }

  // pre Order
  preOrder() {
    //Root - Left - Right.
    const result = [];
    const traverse = (node) => {
      result.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

//in order
  inOrder() {
    //left - Root - Right.
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      result.push(node.value);
      if (node.right) traverse(node.right);
    };
    traverse(this.root);
    return result;
  }

  /// post order
  postOrder() {
    //Root - Left - Right.
    const result = [];
    const traverse = (node) => {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      result.push(node.value);
    };
    traverse(this.root);
    return result;
    }

}

    class BinarySearchTree {
      constructor(root = null) {
          this.root = root;
      }
    
      // add a value to the tree
      add(value) {
          let newNode = new Node(value)
          const binaryAdd = (node, newNode) => {
              if (newNode.value < node.value) {
                  if (!node.left) {
                      node.left = newNode;
                  } else {
                      binaryAdd(node.left, newNode);
                  }
    
              } else if (!node.right) {
                  node.right = newNode;
              } else {
                  binaryAdd(node.right, newNode);
              }
          }
    
          if (!this.root) {
              this.root = newNode;
              return;
          } else {
              binaryAdd(this.root, newNode);
          }
      }
    
      // return true if the tree contain the value.
      contains(value) {
    
          const search = (value, node = null) => {
              if (node === null) {
                  return false;
              } else if (value < node.value) {
                  return search(value, node.left);
    
              } else if (value > node.value) {
                  return search(value, node.right)
              } else return true;
          }
          if (!this.root) {
              return false;
          } else {
              return search(value, this.root)
          }
      }
    
    }
    

    module.exports = { BinaryTree, BinarySearchTree };
