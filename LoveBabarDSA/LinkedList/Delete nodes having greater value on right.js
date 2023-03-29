/*


Given a singly linked list, remove all the nodes which have a greater value on their right side.

Example 1:

Input:
LinkedList = 12->15->10->11->5->6->2->3
Output: 15 11 6 3
Explanation: Since, 12, 10, 5 and 2 are
the elements which have greater elements
on the following nodes. So, after deleting
them, the linked list would like be 15,
11, 6, 3.
Example 2:

Input:
LinkedList = 10->20->30->40->50->60
Output: 60
Your Task:
The task is to complete the function compute() which should modify the list as required and return the head of the modified linked list. The printing is done by the driver code,

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

*/

function reverseList(head){
    
    let prev =  null
    let curr = head
    let next = null
    
    while(curr!=null){
        next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
class Solution {
    
    compute(head)
    {
        //your code here
       head = reverseList(head)
       
       let curr = head
       
       let max =  head.data
       let prev = head
       head = head.next
       
       while(head!=null){
           
           if(head.data>=max){
               max = head.data
               prev = head
               head = head.next
           }
           else{
               prev.next = head.next
               head =head.next
           }
       }
       head = reverseList(curr)
       
       return head
    }
}

