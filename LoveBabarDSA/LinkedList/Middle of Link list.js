/*
Given the head of a singly linked list, return the middle node of the linked list.

If there are two middle nodes, return the second middle node.

 

Example 1:


Input: head = [1,2,3,4,5]
Output: [3,4,5]
Explanation: The middle node of the list is node 3.
Example 2:


Input: head = [1,2,3,4,5,6]
Output: [4,5,6]
Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.
 

Constraints:

The number of nodes in the list is in the range [1, 100].
*/
// main approch --> Tc --> O(n) , sc -> O(1)

var middleNode = function(head) {

    if(head == null) return null
    if(head.next == null) return head
    
   let slow = head
   let fast = head.next

   while(fast!=null)
   {
       fast = fast.next
       if(fast!=null)
       {
           fast = fast.next
       }
       slow = slow.next
   }

   return slow
};


// Tc --> O(n) + O(n/2) , Sc --> O(1)

function getLength(head)
{
   if(head == null ) return 0
   if(head.next == null) return 1;

   let cnt = 0;

   while(head!=null)
   {
       head = head.next
       cnt++
   }

   return cnt
}


var middleNode = function(head) {
   
   let len = getLength(head)

   if(len == 0) return null
   if(len == 1) return head

   let ans = Math.floor(len/2)

   let temp = head
   console.log(ans , temp)

   while(ans!=0)
   {
       temp = temp.next
       ans--
       console.log(ans , temp)
   }

   return temp
};