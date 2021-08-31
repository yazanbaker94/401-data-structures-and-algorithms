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


    findMaximumValue() {

        // check if there is no root
          if (!this.root) {
              return ' there is no root';
          }
          let array = this.postOrder();
          let maxValue = this.root.value;
      
          for (let i = 0; i < array.length; i++) {
              if (array[i] > maxValue)
              maxValue = array[i];
      
          }
          return maxValue;
      }

      breadthFirstSearch(tree) {
        if (!this.root) {
          return "empty";
        }
        let queue = [tree];
        let result = [];
        while (queue.length > 0) {
          let item = queue.shift();
          let value = item.value;

          result.push(value);
          if (item.left == null && item.right == null) {
            continue;
          }
          if (item.left != null) {
            queue.push(item.left);
          }
    
          if (item.right != null) {
            queue.push(item.right);
          }
        }
        return result;
      }



      
      }

    



    

    module.exports = BinaryTree ;
