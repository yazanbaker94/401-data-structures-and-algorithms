# Stacks and Queues
FIFO & LILO and LIFO & FILO Principles
Queue: First In First Out (FIFO): The first object into a queue is the first object to leave the queue, used by a queue.

Stack: Last In First Out (LIFO): The last object into a stack is the first object to leave the stack, used by a stack

OR

Stack: Last In First Out (FILO): The First object or item in a stack is the last object or item to leave the stack.

Queue: Last In First Out (LILO): The last object or item in a queue is the last object or item to leave the queue.

## Challenge
Stack
Create a Stack class that has a top property. It creates an empty Stack when instantiated.
This object should be aware of a default empty value assigned to top when the stack is created.
The class should contain the following methods:
push
Arguments: value
adds a new node with that value to the top of the stack with an O(1) Time performance.
pop
Arguments: none
Returns: the value from node from the top of the stack
Removes the node from the top of the stack
Should raise exception when called on empty stack
peek
Arguments: none
Returns: Value of the node located at the top of the stack
Should raise exception when called on empty stack
is empty
Arguments: none
Returns: Boolean indicating whether or not the stack is empty.

<hr>

Queue
Create a Queue class that has a front property. It creates an empty Queue when instantiated.
This object should be aware of a default empty value assigned to front when the queue is created.
The class should contain the following methods:
enqueue
Arguments: value
adds a new node with that value to the back of the queue with an O(1) Time performance.
dequeue
Arguments: none
Returns: the value from node from the front of the queue
Removes the node from the front of the queue
Should raise exception when called on empty queue
peek
Arguments: none
Returns: Value of the node located at the front of the queue
Should raise exception when called on empty stack
is empty
Arguments: none
Returns: Boolean indicating whether or not the queue is empty

## Approach & Efficiency
tried to use the same concepts that we usually use in javascript web programming, and also searched a lot online to find ways to tackle the problem.

## API
<!-- Description of each method publicly available to your Stack and Queue-->

1) enqueue(value) - 

add (an item of data awaiting processing) to a queue of such items

2) dequeue
removes the first item in the queue

3) peek()
checks the value of the first index in the array, returns the value

4) isEmpty - 
checks if the head is empty therefore checks the array if empty, returns boolean result
