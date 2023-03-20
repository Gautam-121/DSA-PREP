// How to detect a loop

// approch-1 --> using set store node in set , and check this node already present 
// if present then return true , otherwise false

var hasCycle = function(head) {

    if(head == null) return false
    if(head.next  == null) return false
    if(head.next == head) return true
    
    let set = new Set()

    let temp = head

    while(temp!= null)
    {
        if( set.has(temp)){
            return true
        }

        set.add( temp )

        temp = temp.next
    }
    return false
};


// approch --2 -> using FCD --> Flod cycle detection

var hasCycle = function(head) {

    if(head == null) return false
    if(head.next  == null) return false
    if(head.next == head) return true
    
    let slow = head
    let fast = head.next

    while(fast!=null)
    {
        fast = fast.next

        if(fast!=null){
            fast = fast.next
        }

        slow = slow.next

        if(slow == fast) return true
    }
   
   return false
};

// How to find start or Begining of loop in linked List

// approch using FCD --> Flod cycle detection

function startOfLoop(head)
{
    if(head == null) return "No loop"
    if(head.next  == null) return "No loop"
    if(head.next == head) return head

    let slow = head
    let fast = head.next

    function hasloop (head) {

        while(fast!=null)
        {
            fast = fast.next
    
            if(fast!=null){
                fast = fast.next
            }
    
            slow = slow.next
    
            if(slow == fast) return true
        }
       return false
    }

    if(hasloop)
    {
        slow = head
        fast = fast.next

        while(slow != fast)
        {
            slow = slow.next
            fast = fast.next
        }

        return slow
    }
    else
    {
        return "No loop"
    }
};


// Remove loop from linked list

function removeLoopFromLL(head)
{
    if(head == null) return "No loop"
    if(head.next  == null) return "No loop"
    if(head.next == head) return head

    let slow = head
    let fast = head.next

    function hasloop (head) {

        while(fast!=null)
        {
            fast = fast.next
    
            if(fast!=null){
                fast = fast.next
            }
    
            slow = slow.next
    
            if(slow == fast) return true
        }
       return false
    }

    if(hasloop)
    {
        slow = head
        temp = fast

        while(slow != fast)
        {
            slow = slow.next
            fast = fast.next

            if(slow!=fast)
            {
                temp = fast
            }
        }

        temp.next = null
    }
    else
    {
        return "No loop"
    }
};