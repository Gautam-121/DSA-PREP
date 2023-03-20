class Stack
{
    constructor(size)
    {
        this.arr = new Array(size) // Create Array stack Ds of Given size
        this.size = size  // store size of stack
        this.top = -1; // store index of stack
    }

    // add a element in stack
    push(element){

        if(this.size - this.top > 1) // size - top > 1 --> some space are remain to store value in stack
        {
            this.top++ // -1 --> 0
            this.arr[this.top] = element
        }
        else{
            console.log("Stack is OverFlow")
        }
    }

    // Remove element from the stack
    pop(){
        
        if(this.top>=0)
        {
            let ans = this.arr[this.top]
            this.top--
            return ans
        }
        else
        {
            console.log("Stack is UnderFlow")
        }
    }

    // Get Top element on stack
    peek(){

        if(this.top>=0)
        {
            return this.arr[this.top]
        }
        else{
            console.log("Stack is Empty")
        }
    }

    //Check stack is Empty or not;
    isEmpty()
    {
        if(this.top == -1) return true
        else return false
    }

    clear()
    {
        this.arr = new Array(this.size)
    }

    printStack()
    {
        for(let i = 0 ; i<this.arr.length ; i++)
        {
            console.log(this.arr[i])
        }
    }
}


let stack = new Stack(5)


console.log(stack.isEmpty())

stack.push(10)
stack.push(20)
stack.push(30)
stack.push(40)
stack.push(50)
stack.push(60)

console.log(stack.arr)

stack.pop()

stack.push(60)

console.log(stack.arr)

console.log(stack.isEmpty())

console.log(stack.clear())

console.log(stack.arr)




