/*

Given a doubly-linked list, rotate the linked list counter-clockwise by N nodes. Here N is a given positive integer and is smaller than the count of nodes in linked list. 



N = 2
Rotated List: 




Examples:  

Input : a  b  c  d  e   N = 2
Output : c  d  e  a  b 

Input : a  b  c  d  e  f  g  h   N = 4
Output : e  f  g  h  a  b  c  d 

*/


// Rotate Anticlockwise

function rotate(head , n){

    if(haed == null) return head

    let cnt = 1;

    //go on that point jhase rotate krna hai
    while(curr!=null && cnt<n){
        curr = curr.next
        cnt++
    }

    let nthNode = curr // store pointer jhase rotate krna hai
 
    while(curr.next!=null){ // aakhri pointer me leke jaao
        curr = curr.next
    }

    curr.next = head
    head.prev = curr

    head = nthNode.next
    nthNode.next = null
} 