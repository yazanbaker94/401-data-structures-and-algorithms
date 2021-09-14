##  Insertion-sort:
 
STEP 1: Determine pivot as middle element. So, 7 is the pivot element.

![q1](q1.png)

STEP 2: Start left and right pointers as first and last elements of the array respectively. So, left pointer is pointing to 5 at index 0 and right pointer is pointing to 9 at index 5.

![q2](q2.png)

STEP 3: Compare element at the left pointer with the pivot element. Since, 5 < 6 shift left pointer to the right to index 1.
![q3](q3.png)


STEP 4: Now, still 3 <6 so shift left pointer to one more index to the right. So now 7 > 6 stop incrementing the left pointer and now left pointer is at index 2.

![q4](q4.png)

STEP 5: Now, compare value at the right pointer with the pivot element. Since 9 > 6 move the right pointer to the left. Now as 2 < 6 stop moving the right pointer.

![q5](q5.png)



STEP 6: Swap both values present at left and right pointers with each other.

![q6](q6.png)


STEP 7: Move both pointers one more step.

![q7](q7.png)

STEP 8: Since 6 = 6, move pointers to one more step and stop as left pointer crosses the right pointer and return the index of the left pointer.


![q8](q8.png)
