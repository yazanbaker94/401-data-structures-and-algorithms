# Challenge Summary
Quick Sort algorithm follows Divide and Conquer approach. It divides elements into smaller parts based on some condition and performing the sort operations on those divided smaller parts.

## Whiteboard Process
![q1](q1.png)
![q2](q2.png)
![q3](q3.png)
![q5](q5.png)
![q6](q6.png)
![q7](q7.png)
![q8](q8.png)

## Approach & Efficiency

Time Complexity: O(n^2) 
Auxiliary Space: O(1)
Boundary Cases: Insertion sort takes maximum time to sort if elements are sorted in reverse order. And it takes minimum time (Order of n) when elements are already sorted.

## Solution
                    var items = [5,3,7,6,2,9];
                    console.log(items.sort());
                    //prints [2, 3, 5, 6, 7, 9]