/*

Given a doubly linked list containing n nodes. The problem is to reverse every group of k nodes in the list.

Examples: 
 
Input :-

1 2 3 4 5 6 7 8 9 10 

k = 4

Output:-

4 3 2 1 8 7 6 5 10 9

*/

function reverseList(head , k){

    if(head == null){
        return head
    }

    let curr = head
    let next = null
    let prev = null
    let cnt = 0;

    while(curr!=null && cnt<k){
        next = curr.next
        curr.next = prev
        curr.prev = next
        prev = curr
        curr = next
        cnt++
    }

    if(next!=null){
        head.next = reverseList(next , k)
    }

    return prev
}

function reverseByK(head , k){

    reverseList(head , k)
}