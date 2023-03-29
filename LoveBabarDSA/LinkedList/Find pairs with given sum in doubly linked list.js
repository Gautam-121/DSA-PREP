/*

Given a sorted doubly linked list of positive distinct elements, the task is to find pairs in a doubly-linked list whose sum is equal to given value target.

 

Example 1:

Input:  
1 <-> 2 <-> 4 <-> 5 <-> 6 <-> 8 <-> 9
target = 7
Output: (1, 6), (2,5)
Explanation: We can see that there are two pairs 
(1, 6) and (2,5) with sum 7.
 

Example 2:

Input: 
1 <-> 5 <-> 6
target = 6
Output: (1,5)
Explanation: We can see that there is one pairs  (1, 5) with sum 6.

 

Your Task:
You don't need to read input or print anything. Your task is to complete the function findPairsWithGivenSum() which takes head node of the doubly linked list and an integer target as input parameter and returns an array of pairs. If there is no such pair return empty array.

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

*/


function findPairsWithGivenSum(head){

    if(head == null || head.next == null) return []
        
    let curr2 = head
    let ans = []
    
    //Go to last node of linked list
    while(curr2.next!=null){
        curr2 = curr2.next
    }
    
    let curr1 = head
    
    //compute curr1  ans curr2
    while(curr1 !== curr2){
        
        if(curr1.data + curr2.data == target){
            ans.push([curr1.data , curr2.data])
            curr1 = curr1.next
            curr2 = curr2.prev
        }
        else if(curr1.data + curr2.data < target){
            curr1 = curr1.next
        }
        else{
            curr2 = curr2.prev
        }
    }
    return ans
}