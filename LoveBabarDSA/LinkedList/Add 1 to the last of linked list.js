function reverse(head){
    
    let curr =  head
    let prev = null
    let next = null
    
    while(curr!=null){
        next =  curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    
    return prev
}

class Solution {
    addOne(head)
    {
        //your code here
        
        if(head == null)  return head
        
        head =  reverse(head)
        let carry = 1;
        let curr = head
        
        while(curr!=null && carry!=0){
            
            let data = curr.data + carry
            curr.data = data%10
            carry = Math.floor(data/10)
            curr = curr.next
        }
        
        head = reverse(head)
        
        return head
    }
}
