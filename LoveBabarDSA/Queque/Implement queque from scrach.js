class Queque{

    constructor(size)
    {
        this.arr  = new Array(size)
        this.size =  size
        this.front = 0;
        this.rear  = 0
    }

    // Publiv function of queque

    isEmpty()
    {
        if(this.front == this.rear) return true
        return false
    }

    enque(data)
    {
       if(this.rear == this.size)
       {
           console.log("Queque is OverFlow")
       }
       else
       {
        this.arr[this.rear] = data
        this.rear++
       }
    }

    deque()
    {
       if(isEmpty())
       {
           console.log("Queque is Empty")
       }
       else
       {
          let ans =  this.arr[this.front]
          this.arr[this.front] = -1
          this.front++
          

        
       }
    }
}