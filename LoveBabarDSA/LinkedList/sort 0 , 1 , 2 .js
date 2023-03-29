/*
Given a linked list of N nodes where nodes can contain values 0s, 1s, and 2s only. The task is to segregate 0s, 1s, and 2s linked list such that all zeros segregate to head side, 2s at the end of the linked list, and 1s in the mid of 0s and 2s.

Example 1:

Input:
N = 8
value[] = {1,2,2,1,2,0,2,2}
Output: 0 1 1 2 2 2 2 2
Explanation: All the 0s are segregated
to the left end of the linked list,
2s to the right end of the list, and
1s in between.
Example 2:


Input:
N = 4
value[] = {2,2,0,1}
Output: 0 1 2 2
Explanation: After arranging all the
0s,1s and 2s in the given format,
the output will be 0 1 2 2.
Your Task:
The task is to complete the function segregate() which segregates the nodes in the linked list as asked in the problem statement and returns the head of the modified linked list. The printing is done automatically by the driver code.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(N).
*/

// Approch -- 1 --> count all zeroes , ones and twos , then create linked list 
// sc --> O(n) , Tc --> O(n)
class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        //your code here
        
        if(head == null) return head
        
        let c0 = 0;
        let c1 = 0;
        let c2 = 0;
        
        let curr = head
        
        while(curr!=null)
        {
            if(curr.data  == 0) c0++
            else if(curr.data == 1) c1++
            else if(curr.data == 2) c2++
            
            curr = curr.next
        }
        
        let head1 = null
        let tail1 = null
        
        while(c0!=0)
        {
            let newNode = new Node(0) 
            
            if(tail1 == null)
            {
                head1 = newNode
                tail1 = head1
            }
            else
            {
                tail1.next = newNode
                tail1 = newNode
            }
            
            c0--
        }
        
        while(c1!=0)
        {
            let newNode = new Node(1) 
            
            if(tail1 == null)
            {
                head1 = newNode
                tail1 = head1
            }
            else
            {
                tail1.next = newNode
                tail1 = newNode
            }
            
            c1--
        }
        
        while(c2!=0)
        {
            let newNode = new Node(2) 
            
            if(tail1 == null)
            {
                head1 = newNode
                tail1 = head1
            }
            else
            {
                tail1.next = newNode
                tail1 = newNode
            }
            
            c2--
        }
        
        return head1
    }
}

class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        //your code here
        
        if(head == null) return head
        
        let zeroHead = new Node(-1);
        let zeroTail = zeroHead
        let oneHead  = new Node(-1);
        let oneTail  = oneHead
        let twoHead  = new Node(-1);
        let twoTail = twoHead;
        
        let curr = head
        
        // create separate list 0s, 1s and 2s

        while(curr!=null)
        {

            if(curr.data == 0)
            {
               zeroTail.next = curr 
               zeroTail = curr
            }
            else if(curr.data == 1)
            {
                oneTail.next = curr 
                oneTail = curr
            }
            else
            {
                twoTail.next = curr 
                twoTail = curr
            }
            
            curr = curr.next
        }
        
    //merge 3 sublist
    
    // 1s list not empty
    if(oneHead.next != null) {
        zeroTail.next = oneHead.next;
    }
    else {
        //1s list -> empty
        zeroTail.next = twoHead.next;
    }
    
    oneTail.next = twoHead.next;
    twoTail.next = null;
    
	//setup head 
    head = zeroHead.next;
    
    return head
    }
}

// Approch - 2 --> // sc --> O(n) , tc --> O(1) , update in original array

class Solution {
    //Function to sort a linked list of 0s, 1s and 2s.
    segregate(head)
    {
        //your code here
        
        if(head == null) return head
        
        let c0 = 0;
        let c1 = 0;
        let c2 = 0;
        
        let curr = head
        
        while(curr!=null)
        {
            if(curr.data  == 0) c0++
            else if(curr.data == 1) c1++
            else if(curr.data == 2) c2++
            
            curr = curr.next
        }
        
        let temp = head
    
        while(c0!=0)
        {
            
            temp.data = 0
            temp = temp.next
            c0--
        }
        
        while(c1!=0)
        {
            temp.data = 1
            temp = temp.next
            c1--
        }
        
        while(c2!=0)
        {
            temp.data = 2
            temp = temp.next
            c2--
        }
        
        return head
    }
}