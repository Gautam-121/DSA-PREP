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
            this.top++
            this.arr.push(element)
        }
        else{
            console.log("Stack is OverFlow")
        }
    }

    // Remove element from the stack
    pop(){
        
        if(this.top>=0)
        {
            this.top--
            return this.arr.pop()
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
            return this.arr[this.arr.length-1]
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
}

function reverseString(str)
{
    let stack = new Stack(str.length)

    for(let i =0 ; i<str.length ; i++)
    {
        let char = str[i]
        stack.push(char)
    }

    let newStr = ""

    while(!stack.isEmpty())
    {
        let char = stack.peek()
        newStr+=char
        stack.pop()
    }
    return newStr
}


console.log(reverseString("Shyamsundar"))






// class Stack
// {
//     constructor(size)
//     {
//         this.arr = new Array(size)
//         this.size = size
//         this.top = -1
//     }

//     push(ele)
//     {
//         if(this.size - this.top > 1)
//         {
//             top++
//             this.arr[this.top] = ele
//         }
//     }

//     pop()
//     {
//         if(this.top >= 0)
//         {
//             let ans = this.arr[this.top]
//             top--
//             return ans
//         }
//     }

//     isEmpty()
//     {
//         if(this.top == -1) return true
//         return false
//     }
// }


// function reverse(str)
// {
//     let stack = new Stack(str.length)

//     for(let i = 0 ; i<str.length ; i++)
//     {
//         stack.push(str[i])
//     }

//     let ans = ""

//     while(!stack.isEmpty())
//     {
//         ans+=stack.pop()
//     }
// }