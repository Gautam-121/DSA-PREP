
/*

You are given the head of a singly linked-list. The list can be represented as:

L0 → L1 → … → Ln - 1 → Ln
Reorder the list to be on the following form:

L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
You may not modify the values in the list's nodes. Only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4]
Output: [1,4,2,3]
Example 2:


Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]
 

Constraints:

The number of nodes in the list is in the range [1, 5 * 104].
1 <= Node.val <= 1000

*/

function middleNode(head){

    let slow = head
    let fast = slow.next

    while(fast!=null && slow!=null){

        slow = slow.next
        fast = fast.next

        if(fast!=null){
            fast = fast.next
        }
    }

    return slow
}

function reverse(curr){

    let prev = null
    let next = null

    while(curr!=null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }

    return prev
}
var reorderList = function(head) {

    if(head == null || head.next == null) return head

    let middle = middleNode(head)

    let curr = middle.next

    middle.next = null

    curr = reverse(curr)

    let prev1 = head
    let curr1 = prev1
    let prev2 = curr
    let curr2 = prev2

    while(curr1!=null && curr2!=null){
        curr1 =  curr1.next
        curr2 =  curr2.next

        prev1.next = prev2
        prev2.next = curr1

        prev1 = curr1
        prev2 = curr2

    }
 
};




function getMiddle(head){

    let slow = head
    let fast = head
    let prev = null

    while(slow!=null || fast!=null){

        prev = slow
        slow = slow.next
        fast = fast.next

        if(fast.next!=null){
            fast = fast.next
        }

    }

    return prev
}














