class Node {

    constructor(val) {
        this.data = val
        this.next = null
    }
}

let tail = new Node(1);

function factorial(N) {

    for (let i = 2; i <= N; i++) {
        let temp = tail
        let prevNode = temp
        let carry = 0

        while (temp != null) {
            let data = temp.data * i + carry

            temp.data = data % 10 // last digit of number
            carry = Math.floor(data / 10) //  carry of number
            prevNode = temp
            temp = temp.next
        }

        while (carry != 0) {
            prevNode.next = new Node(carry % 10)
            carry = Math.floor(carry / 10)
            prevNode = prevNode.next
        }
    }
}

let temp = tail

function print(temp)
{
    // Base case
    if(temp == null) return

    // Recursive call

    print(temp.next)

    // process
    console.log(temp.data)
}

factorial(5)
console.log(tail)
print(temp)


class Node{

    constructor(val)
    {
        this.data = val
        this.next = null
    }
}

function largeFact(n)
{

    let head = new Node(1)

    for(let i = 2 ; i<=n ; i++)
    {
        let temp =  head
        let nextNode = temp
        let carry = 0;

        while(temp!=null)
        {
            let data = temp.data * i + carry
            temp.data = data%10
            carry = Math.floor(carry/10)
            nextNode = temp
            temp = temp.next
        }

        while(carry!=0)
        {
            nextNode.next = new Node(carry%10)
            carry = Math.floor(carry/10)
            nextNode = nextNode.next
        }
    }

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




function largeNumberFact(n){

    let head = new Node(1)
    let tail = head

    for(let i = 2 ; i<=n ; i++){

        let temp = head
        let prev = null
        let carry = 0

        while(temp!=0){

            let data =  temp.data * i + carry
            temp.data = data%10
            carry = Math.floor(carry/10)
            prev = temp
            temp = temp.next
        }

        while(carry!=0){

            prev.next =  new Node(carry%10)
            prev = prev.next
            carry = Math.floor(carry/10)
        }
    }

    
}








