/*

Given a singly linked list consisting of N nodes. The task is to remove duplicates (nodes with duplicate values) from the given list (if exists).
Note: Try not to use extra space. Expected time complexity is O(N). The nodes are arranged in a sorted way.

Example 1:

Input:
LinkedList: 2->2->4->5
Output: 2 4 5
Explanation: In the given linked list 
2 ->2 -> 4-> 5, only 2 occurs more 
than 1 time.
Example 2:

Input:
LinkedList: 2->2->2->2->2
Output: 2
Explanation: In the given linked list 
2 ->2 ->2 ->2 ->2, 2 is the only element
and is repeated 5 times.
Your Task:
The task is to complete the function removeDuplicates() which should remove the duplicates from linked list and return the head of the linkedlist.

Expected Time Complexity : O(N)
Expected Auxilliary Space : O(1)

*/


// approch  - 1 --> Use map to stored value if this value find delete from loop , if not insert in map
// Tc --> O(n) , Sc--> O(n)
function removeDuplicate(head)
{
    if(head == null || head.next == null) return head

    let set = new Set()

    let curr = head
    let prev = null

    while(curr!=null)
    {
        if(set.has(curr.data))
        {
             prev.next = curr.next
             curr = curr.next
        }
        else
        {
            
            set.add(curr.data)
            prev = curr
            curr = curr.next
        }
    }

    return head
}

// Tc --> O(n) , Sc --> O(1)

function removeElement(head)
{
    if(head == null || head.next == null) return head

    let curr = head

    while(curr!=null)
    {
        if(curr.next !== null && (curr.val == curr.next.val))
        {
             curr.next = curr.next.next
        }
        else
        {
            curr = curr.next
        }
    }

    return head
}

// approch --> prev ka data jb tk curr ke data ke barabr hai mai curr badate jaunga , jaise unequal
// mil gye prev ka next curr pe point kr dunga jisse sbhi duplicate remove ho jayenge ,
// then prev ko curr me daal dunga , curr ko curr ke next me 

// loop se bahar hone ke baad prev.next --> null kr dena

class Solution {
    //Function to remove duplicates from sorted linked list.
    removeDuplicates(head)
    {
        //your code here
        if(head == null) return head 
        if(head.next == null) return head
        
        let prev = head
        let curr = head.next
        
        while(curr!=null)
        {
            if(prev.data == curr.data)
            {
                curr = curr.next
            }
            else
            {
                prev.next = curr
                prev = curr
                curr = curr.next
            }
        }
        
        prev.next = null
        
        return head
    }
}







function removeDuplictae(head){

    if(head == null || head.next == null) return head

    let curr = head
    let next = head.next

    while(next !=null){

        if(curr.val == next.val){
            next = next.val
        }
        else{
            curr.next = next
            curr = next
            next = next.next
        }
    }

    curr.next = next

    return head
}