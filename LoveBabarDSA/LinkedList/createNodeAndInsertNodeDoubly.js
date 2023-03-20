class Node{

    constructor(val)
    {
        this.data = val
        this.next = null
        this.prev = null
    }
}

let head = new Node(10)
let tail = head

// print the linkedList

function print()
{
    let temp = head

    while(temp!=null)
    {
        console.log(temp.data)
        temp = temp.next
    }
}

// length of linkedList

function getLength(head)
{
    let temp = head
    let cnt = 0

    while(temp!= null)
    {
        cnt++
        temp = temp.next
    }

    return cnt
}

//  inserAtHead

function inserAtHead(val)
{
   let newNode = new Node(val)

   if(head == null)
   {
    head = newNode
    tail = newNode
   }
   else
   {
      newNode.next = head
      head.prev = newNode
      head = newNode
   }
}

function inserAtTail(val)
{
    let newNode = new Node(val)

    if(tail == null)
    {
        head = newNode
        tail = newNode
    }
    else
    {
        newNode.prev = tail
        tail.next = newNode
        tail = newNode
    }
}

function inserAtAnyPos(position , val)
{
    if(position == 1)
    {
        inserAtHead(val)
        return
    }

    let curr = head
    let cnt = 1

    while(cnt< position-1)
    {
        curr = curr.next
        cnt++
    }

    if(curr.next == null)
    {
        inserAtTail(val)
        return
    }

    let newNode = new Node(val)

    newNode.next = curr.next
    newNode.prev = curr
    curr.next.prev = newNode
    curr.next = newNode
}

inserAtHead(9)
inserAtHead(8)
inserAtTail(15)
inserAtAnyPos(1 , 2)
inserAtAnyPos(3 , 20)
// print()
// console.log(getLength(head))

// console.log(head)
// console.log(tail)

function deleteAtAnyPos(position)
{
    if(head == null)
    {
        console.log('linkedList is already empty')
    }

    if(position == 1)
    {
      
        let temp = head

        head = head.next
        head.prev = null
        temp.prev = null
        temp.next = null

    }

    let curr = head
    let pre  = null
    let cnt = 1;

    while(cnt < position)
    {
        pre = curr
        curr = curr.next
        cnt++
    }

    if(curr.next == null)
    {
        pre.next = curr.next
        curr.next = null
        curr.prev = null
        tail = pre
    }

    pre.next = curr.next
    curr.next.prev = prev
    curr.next = null
    curr.prev = null
}



