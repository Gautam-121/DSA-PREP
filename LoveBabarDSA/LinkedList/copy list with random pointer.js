//Tc --> O(n)
//Sc --> O(n)

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

var copyRandomList = function(head) {
    
    if(head == null ) return head

    // create Clone of a linked list
    let cloneHead = null
    let cloneTail = cloneHead

    let curr = head

    while(curr!=null){

        let newNode = new Node(curr.val)

        if(cloneHead == null){
            cloneHead = newNode
            cloneTail = cloneHead
        }
        else{
            cloneTail.next = new Node(curr.val)
            cloneTail = cloneTail.next
        }

        curr = curr.next
    }


    //mapping of originalList with cloneList
    let map = new Map()
    let curr1 = head
    let curr2 = cloneHead

    while(curr1!=null){

        map.set(curr1 , curr2)
        curr1 = curr1.next
        curr2 = curr2.next
    }

    //coonect cloneList with random pointer
    curr1 = head
    curr2 = cloneHead

    while(curr1!=null){

        curr2.random = map.get(curr1.random)
        curr1 = curr1.next
        curr2 = curr2.next
    }

    return cloneHead
};




























