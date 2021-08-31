const BinaryTree = require("./binary-tree");
const Node = require('./Node')

function fizzBuzzTree(tree) {
  let node = tree.root;
  let stack = [];

  if (!node) {
    return null;
  } else {
    stack.push(node);

    while (stack.length) {
      node = stack.pop();

      if (node.value % 15 === 0) {
        node.value = "FizzBuzz";
      } else if (node.value % 3 === 0) {
        node.value = "Fizz";
      } else if (node.value % 5 === 0) {
        node.value = "Buzz";
      } else {
        node.value = node.value.toString();
      }
      if (node.left) stack.push(node.left);
      if (node.right) stack.push(node.right);
    }
  }
  return tree;
}

let tree = new BinaryTree();

tree.root = new Node(60);
tree.root.right= new Node(72);
tree.root.left = new Node(51);
tree.root.left.right= new Node(55);
tree.root.left.left= new Node(40);
tree.root.right.right = new Node(91);
tree.root.right.left=new Node(69)


console.log(fizzBuzzTree(tree));

module.exports = fizzBuzzTree