/*
Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers from the original list. Return the linked list sorted as well.

 

Example 1:


Input: head = [1,2,3,3,4,4,5]
Output: [1,2,5]
Example 2:


Input: head = [1,1,1,2,3]
Output: [2,3]
 

Constraints:

The number of nodes in the list is in the range [0, 300].
-100 <= Node.val <= 100
The list is guaranteed to be sorted in ascending order.

*/


var deleteDuplicates = function(head) {
    
    if(head == null || head.next == null) return head

   let curr = head
   let prev = null


   while(curr!=null)
   {
       if(curr.next!= null && (curr.val == curr.next.val))
       {
           while(curr.next!= null && (curr.val == curr.next.val))
           {
               curr = curr.next
           }
           curr = curr.next

           if(prev == null)
           {
               head = curr
           }
           else
           {
               prev.next = curr
           }
       }
       else
       {
           prev = curr
           curr = curr.next
       }
   }

   return head
};



function removeDuplicate(head){

    if(head == null || head.next == null) return head

    while(head.next != null || head.val == head.next.val){
        head = head.next
    }
}