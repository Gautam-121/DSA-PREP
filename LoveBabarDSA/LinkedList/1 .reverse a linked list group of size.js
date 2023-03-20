// Tc --> O(n)
// Sc --> sc(n/k) --> O(n)

function solve(head , k)
{
      // base case
        if(head == null)
        {
            return null
        }
        
    // step-1 -->    // reverse kr phla "k" Node 
        
        let curr = head
        let prev = null
        let forward = null
        let cnt = 0
        
        while( curr!= null && cnt < k )
        {
            forward = curr.next
            curr.next = prev
            prev = curr
            curr = forward
            cnt++
        }

    // step -2 --> recursion dekh lega aage ka
        
        if(forward!= null)
        {
            head.next = solve(forward , k)
        }
    
    // step -3 --> return head of reverse list

        return prev
}

class Solution {
    /* Should do this in-place without altering the nodes' values.*/
    reverse(node, k)
    {
        //your code here
        return solve(node , k)
      
    }
}



class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

let head = null
let tail = head

function insertAtHead(data){

    if(head == null){
        head = new Node(data)
        tail = head
    }

    let newNode = new Node(data)

    newNode.next =  head
    head = newNode
}


function insertAtTail(){

    if(tail == null)

    tail.next 
    ya
}


function inserTanh(pos, data){

    if(pos == 1){
        insertAtHead(data)
    }

    let cnt = 1
    let temp = head

    while(cnt<pos-1){
        temp = temp.next
        cnt++
    }

    if(temp.next == null){
        insertAtTail
    }

    let newNode = nxna


}









