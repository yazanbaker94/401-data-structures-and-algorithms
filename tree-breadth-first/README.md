# Challenge Summary

Feature Tasks
Write a function called breadth first
Arguments: tree
Return: list of all values in the tree, in the order they were encountered
NOTE: Traverse the input tree using a Breadth-first approach

## Whiteboard Process
![maxtree](maxtree.png "Reverse")



##  Approach & Efficiency
Take a Empty Queue.
Start from the root, insert the root into the Queue.
Now while Queue is not empty,
Extract the node from the Queue and insert all its children into the Queue.
Print the extracted node.