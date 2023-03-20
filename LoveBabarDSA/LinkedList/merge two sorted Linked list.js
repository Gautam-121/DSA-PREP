/*
merge two unsorted linked list

joind first list to second list and sort this entire list --> for joind O(1) + sort O(nlogn) + mlogn

or sort first and second then joind
*/


/*
merge two sorted linked list-->
*/


function merged(first , second)
{
    // If only one element present in list
    if(first.next == null)
    {
        first.next = second
        return first
    }

    let curr1 = first
    let next1 = curr1.next

    let curr2 = second
    let next2 = curr2.next

    while(next1!=null && curr2!=null)
    {
        if((curr2.val >= curr1.val) && (curr2.val < next1.val))
        {
            // add a node in between first list
            curr1.next = curr2
            next2 = curr2.next
            curr2.next = next1
            
            //update second pointer
            curr1 = curr2
            curr2 = next2
            
        }
        else
        {
            // curr1  and next1 ko aage badana
            curr1 = next1
            next1 = next1.next
        }
    }
     
    // if mera phla list ktm ho gya to mai dusre list ke saat connect karake return kr dunga
    if(next1 == null)
    {
        curr1.next = curr2
        return first
    }
    
    // if dusra list ktm ho gya hai to direct return kr dunga
    return first
}
var mergeTwoLists = function(list1, list2) {
    
    if(list1 == null) return list2;
    if(list2 == null) return list1;

    if(list1.val < list2.val)
    {
        return merged(list1 , list2)
    }
    else
    {
        return merged(list2 , list1)
    }
}; 