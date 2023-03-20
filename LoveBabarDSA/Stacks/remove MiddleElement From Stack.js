/*
Given a stack with push(), pop(), empty() operations, delete the middle of the stack without using any additional data structure.
Middle: ceil((size_of_stack+1)/2) (1-based index)
 

Example 1:

Input: 
Stack = {1, 2, 3, 4, 5}
Output:
ModifiedStack = {1, 2, 4, 5}
Explanation:
As the number of elements is 5 , 
hence the middle element will be the 3rd
element which is deleted
Example 2:

Input: 
Stack = {1 2 3 4}
Output:
ModifiedStack = {1 3 4}
Explanation:
As the number of elements is 4 , 
hence the middle element will be the 2nd
element which is deleted

solve(stack , count , size)
{
    // Base case 
    if(count == Math.floor(size/2))
    {
        stack.pop()
        return
    }

    let nums = stack.top()
    stack.pop()

    solve(stack , count+1 ,size)
}


function(stack , size)
{
    let count = 0;

    solve(stack , count , size)
}
 

Your Task:
You don't need to read input or print anything. Complete the function deleteMid() which takes the stack and its size as input parameters and modifies the stack in-place.
Note: The output shows the stack from top to bottom.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(N)

*/


function solve(inpStack , size , count)
{
    
    // base Case
    if(count == Math.floor(size/2))
    {
        inpStack.pop()
        return;
    }
    
    let peekStor = inpStack.top()
    inpStack.pop()
    
    // recursive call
    solve(inpStack , size , count+1)
    
    inpStack.push(peekStor)
}

class Solution 
{
    //Function to delete middle element of a stack.
    deleteMid(s, sizeOfStack)
    {
        // code here
        let count = 0
        solve(s, sizeOfStack , count)
        
        
    }
}