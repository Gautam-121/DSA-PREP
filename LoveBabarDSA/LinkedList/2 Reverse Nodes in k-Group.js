/*

Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

You may not alter the values in the list's nodes, only nodes themselves may be changed.

 

Example 1:


Input: head = [1,2,3,4,5], k = 2
Output: [2,1,4,3,5]
Example 2:


Input: head = [1,2,3,4,5], k = 3
Output: [3,2,1,4,5]

*/

function reveresGroup(head , k , count)
{
    // Base case
    if(head == null) return null // if heead null ho jaye to null return krna
    if(count < k) return head // if list linked ki size , k se km ho jaye to head hi return krna

    // processing revese Upto k Group

    let curr = head
    let prev = null
    let forward = null
    let cnt = 0

    if(count >= k) // if length leinked list grater than or equal to k ho to reverse krna upto size k
    {
        while(curr!=null && cnt < k)
      {
        forward = curr.next
        curr.next = prev
        prev = curr
        curr = forward
        cnt++
        count--
      }
    }

    // Recursively revese remaining part
    if(forward!=null)
    {
        head.next = reveresGroup( forward , k , count) // if forward null na ho reverse krna remaining list ko , if possible ho to , othrwise head return krna
    }

    return prev
}

var reverseKGroup = function(head, k) {
 
    if(head == null) return head  // if head == null , return head
    if(head.next == null) return head  // if uska next null hai to 1 hi node hai 

    if(k == 1) return head // if k ki value hi 1 hai , 1 , group me reverse krna hai , as it is hai

    let temp = head
    let cnt = 0

    while(temp!= null) // count length of linked list
    {
        temp = temp.next
        cnt++
    }
    
    return reveresGroup(head , k , cnt)
};





function reverseLinkedList(head){

   
}


function solve(head , count , k){

    if(head == null) return null
    if(count<k) return head

    let curr = head
    let prev = null
    let next = null
    let cnt = 0

    if(count >= k){

        while(curr!=null && cnt<k){

            next = curr.next
            curr.next = prev
            prev = curr
            curr = next
            cnt++
            count--
        }
    }

    if(next!=null){
        head.next = reveresGroup(next , count , k)
    }

    return prev

}

function reveresGroup(head , k){

    if(head == null || head.next == null) return head

    let cnt = 0;
    let curr = head

    while(curr!=null){
        cnt++
        curr = curr.next
    }

    if(k>cnt) return head

    return solve(head , cnt , k)
}



