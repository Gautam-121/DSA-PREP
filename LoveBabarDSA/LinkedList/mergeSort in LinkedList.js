/*

Given the head of a linked list, return the list after sorting it in ascending order.

 

Example 1:


Input: head = [4,2,1,3]
Output: [1,2,3,4]
Example 2:


Input: head = [-1,5,3,4,0]
Output: [-1,0,3,4,5]
Example 3:

Input: head = []
Output: []
 

Constraints:

The number of nodes in the list is in the range [0, 5 * 104].
-105 <= Node.val <= 105
*/


// Tc --> O((nlogn) )  sc --> O(logn)

// why mergeSort preffered in linkedList and QuickSort preffered in sort array

function merge(left, right) {

    if (left == null)
        return right;

    if (right == null)
        return left;

    let ans = new ListNode(-1);
    let temp = ans;

    //merge 2 sorted Linked List
    while (left != null && right != null) {

        if (left.val < right.val) {

            temp.next = left;
            temp = left;
            left = left.next;
        }
        else {

            temp.next = right;
            temp = right;
            right = right.next;
        }
    }

    while (left != null) {

        temp.next = left;
        temp = left;
        left = left.next;
    }
    while (right != null) {

        temp.next = right;
        temp = right;
        right = right.next;
    }

    ans = ans.next;
    return ans
}

function findMid(head) {

    let slow = head;
    let fast = head.next;

    while (fast != null && fast.next != null) {
        
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
var sortList = function (head) {

    //base case
    if (head == null || head.next == null) {
        return head;
    }

    // break linked list into 2 halvs, after finding mid
    let mid = findMid(head);

    let left = head;
    let right = mid.next;
    mid.next = null;

    //recursive calls to sort both halves
    left = sortList(left);
    right = sortList(right);

    //merge both left and right halves
    let result = merge(left, right);

    return result;
};














