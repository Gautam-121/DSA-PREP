class Node{

    constructor(val)
    {
        this.data = val
        this.next = null
    }
}

let head = null
let tail = null

function insertAtHead(val)
{
    let newNode = new Node( val)

    if(head == null) // Empty linkedList
    {
        head = newNode
        tail = newNode
        return
    }

    newNode.next = head
    head = newNode
    return
}

function inserAtTail(val)
{
    let newNode = new Node(val)

    if(tail == null) // Empty linkedList
    {
        tail = newNode
        head = newNode
        return
    }

    tail.next = newNode
    tail = newNode
    return
}

function insertAtAnyPosition(position , val)
{
    
    if(position == 1) // insertAtHead
    {
       insertAtHead(val)
       return
    }

    let curr = head;
    let cnt  = 1;

    while(cnt < position-1)
    {
        curr = curr.next
        cnt++
    }

    if(curr.next == null) // insertAtTail
    {
        inserAtTail(val)
        return;
    }

    // create node for value
    let newNode = new Node(val)

    newNode.next = curr.next
    curr.next    = newNode
    return
}

function printList()
{
    if(head == null)
    {
        console.log(null)
    }
    let curr = head

    while(curr!==null)
    {
       console.log(curr.data)
       curr = curr.next
    }
}

insertAtHead(10)
insertAtHead(20)
insertAtHead(30)
inserAtTail(7)
insertAtAnyPosition(3 , 15)

printList()

console.log(head)
console.log(tail)


// Delete from any point

function deleteFromAnyPoint(position)
{
    if(position == 1)
    {
        let curr = head 

        head = head.next
        curr.next = null // remove from memory  delete curr
    }
    else
    {

        let prev = null
        let curr = head
        let cnt = 1

        while(cnt<position)
        {
            prev = curr
            curr = curr.next
            cnt++
        }

        prev.next = curr.next

        if(curr.next ==null)
        {
            tail = prev
        }
        
        curr.next = null // remove from memory delte curr
    }

}

// deleteFromAnyPoint(1)
deleteFromAnyPoint(3)
console.log(head)
console.log(tail)





