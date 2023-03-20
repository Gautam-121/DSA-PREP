class Stack
{
    constructor(size)
    {
        this.size =  size; // create size of stack of given size
        this.arr  = new Array(size) // create size of stack 
        this.top1  = -1; // represent stack 1  , index
        this.top2  = size // represent stack 2 , index
    }

    push1(ele)
    {
        if( this.top2 - this.top1 > 1 ) // any space free to add element on stack 1
        {
            this.top1++
            this.arr[this.top1] =  ele
        }
        else
        {
            console.log("Srack is OverFlow")
        }
    }

    push2(ele)
    {
        if( this.top2 - this.top1 > 1 ) // any space free to add element on stack 2
        {
            this.top2--
            this.arr[this.top2]  = ele
        }
        else
        {
            console.log("Srack is OverFlow")
        }
    }

    pop1()
    {
        if(this.top1>=0){ // remove element from stack 1
            let ans  = this.arr[this.top1]
            this.top1--
            return ans
        }
        else
        {
            console.log("Stack is UnderFlow")
        }
    }

    pop2()
    {
        if(this.top2 < size){ // remove element from stack 1
            let ans = this.arr[this.top2]
            this.top2++
            return ans
        }
        else
        {
            console.log("Stack is UnderFlow")
        }
    }
}

let stack = new Stack(10)

stack.push1(10)
stack.push2(20)

console.log(stack.arr)





class TwoStacks
{
    
    constructor(size){
        this.arr = new Array(size);
        this.size = size;
        this.top1 = -1;
        this.top2 = size;
    }
    
    /**
     * @param {number} x
    */
    //Function to push an integer into the stack1.
    push1(x){
        // code here
        if(this.top2 -  this.top1){
            this.arr[this.top1] =  x
            this.top1++
        }
    }
    
    /**
     * @param {number} x
    */
    //Function to push an integer into the stack2.
    push2(x){
        // code here
        if(this.top2  - this.top1){
            this.arr[this.top2] =  x
            this.top2--
        }
    }
    
    /**
     * @returns {number}
    */
    //Function to remove an element from top of the stack1.
    pop1(){
        // code here
        if(this.top1 >= 0){
            
            let ans  = this.arr[this.top1] // get pop element of an stack1
            this.top1--
            return ans
        }
        else{
            return  -1
        }
    }
    
    /**
     * @returns {number}
    */
    //Function to remove an element from top of the stack2.
    pop2(){
        // code here
        if(this.top2 < this.size){
            
           let ans = this.arr[this.top2] // get pop element from stack 2
           this.top2++
           return ans
        }
        else
        {
            return -1
        }
    }
}






// class stack {

//     constructor(size)
//     {
//         this.arr = new Array(size)
//         this.size = size
//         this.top1 = -1
//         this.top2 = size
//     }

//     push1(ele)
//     {
//         if(this.top2 - this.top1 > 1)
//         {
//             top1++
//             this.arr[this.top1] = ele
//         }
//         else{
//             console.log("stack is overFlow")
//         }
//     }

//     push2(ele)
//     {
//         if(this.top2 - this.top1 > 1)
//         {
//             top2--
//             this.arr[this.top2] = ele
//         }
//         else{
//             console.log("stack is overFlow")
//         }
//     }

//     pop1()
//     {
//         if(this.top1 >= 0)
//         {
//             let valAtPop = this.arr[this.top]
//             top1--
//             return valAtPop
//         }
//     }

//     pop2()
//     {
//         if(this.top2 < this.size)
//         {
//             let valAtPop = this.arr[this.top2]
//             top2++
//             return valAtPop
//         }
//     }
// }