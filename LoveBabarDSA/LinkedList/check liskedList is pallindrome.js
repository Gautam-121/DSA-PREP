// approch --> 
/*

step-1 --> find middle of linked Linst 
step-2 --> reverse a linked list after middle
check --> head to midlle.next upto null

if their data match upto null , its pallindrome , othrwise its not a pallindroe

*/

/*
class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}
*/

// Find middle of linked liust
function getMid(head)
{
    let slow = head
    let fast = head.next
    
    while(fast!=null && fast.next != null)
    {
        fast = fast.next.next
        slow = slow.next
    }
    return slow
}

// reverese a linked list
function reverse(head)
{
    let curr = head
    let prev = null
    let forward = null
    
    while(curr!=null)
    {
        forward = curr.next
        curr.next = prev
        prev = curr
        curr = forward
    }
    return prev
}


class Solution {
    //Function to check whether the list is palindrome.
    isPalindrome(head)
    {
        //your code here
        
        // find middle in linked list
        let middle  = getMid(head)
        
        // reverse A list after middle
        let temp = middle.next 
        middle.next = reverse(temp)
        
        // comapre both halves
        let head1 = head
        let head2 = middle.next
        
        while(head2!=null)
        {
            if(head1.data!= head2.data)
            {
                return 0
            }
            
            head1 = head1.next
            head2 = head2.next
        }
        
        // reverse A list after middle for ass it is same before
        temp = middle.next 
        middle.next = reverse(temp)
        
        
        return 1
    }
}




function middleget(head)
 {
    let slow = head
    let fast = head.next

    while(fast!=null && fast.next !=null)
    {
        fast = fast.next.next
        slow = slow.next
    }

    return slow
 }

 function reverse(node)
 {
    let curr = node
    let prev = null
    let forward = null

    while(curr!=null)
    {
        forward = curr.next
        curr.next = prev
        prev = curr
        curr = forward
    }

    return prev
 }
var isPalindrome = function(head) {
    
    // Find middle of linked list
    let middle = middleget(head)
    
    // reverse the linked list
    middle.next = reverse(middle.next)


    // compare nodes

    let head1 = head
    let head2 = middle.next

    while(head2!=null)
    {
        if(head1.val != head2.val) return false

        head1 = head1.next
        head2 = head2.next
    }

    middle.next = reverse(middle.next)

    return true
};