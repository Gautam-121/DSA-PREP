/*

203. Remove Linked List Elements
Easy
6.6K
195
Companies
Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

 

Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 
*/

var removeElements = function(head, val) {
 
    if(head == null) return head

    while(head!=null && head.val == val)
    {
        head = head.next
    }
   
   let temp = head
   let prev = null

   while(temp!=null)
   {
       if(temp.val == val)
       {
           prev.next = temp.next
           temp = temp.next
       }
       else
       {
           prev = temp
           temp = temp.next
       }
   }
   return head
};



















/*
Example 1:


Input: head = [1,2,6,3,4,5,6], val = 6
Output: [1,2,3,4,5]
Example 2:

Input: head = [], val = 1
Output: []
Example 3:

Input: head = [7,7,7,7], val = 7
Output: []
 
*/

function removeList(head , val){

    if(head == null) return head

    let prev = null
    let curr = head

    while(curr!=null){

        if(curr.data == val && prev == null){
            curr = curr.next
        }
        else if(curr.data == val){
            curr = curr.next
            prev.next = curr
        }
        else{
            prev = curr
            curr = curr.next
        }
    }
}