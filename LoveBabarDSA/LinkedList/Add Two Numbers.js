/*

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 

Example 1:


Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.
Example 2:

Input: l1 = [0], l2 = [0]
Output: [0]
Example 3:

Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]
 

Constraints:

The number of nodes in each linked list is in the range [1, 100].
0 <= Node.val <= 9
It is guaranteed that the list represents a number that does not have leading zeros.

*/

var addTwoNumbers = function (l1, l2) {

    let curr1 = l1 // represent linked 1
    let curr2 = l2 // represent linked 1
    let carry = 0; // represent carry upto 0

    let head = null // Create new List for adding two list
    let tail = null

    while (curr1 != null || curr2 != null || carry != 0) { // perform operation upto any one list contain node , carry contain value
        let sum = 0  // sum of first zero , sum = curr1.val + || curr2.val +  || carry

        if (curr1 != null) { // if current1 present add value in sum
            sum += curr1.val  
        }
        if (curr2 != null) { // if current1 present add value in sum
            sum += curr2.val
        }
        if (carry != 0) { // if carry present add value in sum
            sum += carry
        }

        let newNode = new ListNode(sum % 10) // create node for addition value 

        if (tail == null) { // Insert At tail
            head = newNode
            tail = head

        }
        else {
            tail.next = newNode
            tail = newNode

        }

        carry = Math.floor(sum / 10) // stored carry value in carry variable

        if (curr1 != null) { // if curr1 is present move pointer one position ahead
            curr1 = curr1.next
        }
        if (curr2 != null) { // if curr1 is present move pointer one position ahead
            curr2 = curr2.next
        }
    }

    return head // return resultent sum
};





