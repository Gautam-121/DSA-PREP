// approch -1 --> Iterative , // tc --> O(n) , Sc --> O(1)

/*
Given the head of a singly linked list, reverse the list, and return the 
reversed list.

Example 1:

Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]
Example 2:

Input: head = [1,2]
Output: [2,1]
Example 3:

Input: head = []
Output: []

Constraints:
The number of nodes in the list is the range [0, 5000].
-5000 <= Node.val <= 5000

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?
*/

var reverseList = function(head) {
    
    if(head == null || head.next == null)
    {
        return head
    }

    let prev = null
    let curr = head
    let forward = null

    while(curr!=null)
    {
        forward = curr.next
        curr.next = prev
        prev = curr
        curr = forward
    }
    return prev
};


var reverseList = function(head) {
    
    if(head == null || head.next == null)
    {
        return head
    }

    let chotaHead = reverseList(head.next)

    head.next.next = head
    head.next      = null

    return chotaHead
};


