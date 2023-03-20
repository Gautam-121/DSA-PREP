/*
Given a stack, the task is to sort it such that the top of the stack has the greatest element.

Example 1:

Input:
Stack: 3 2 1
Output: 3 2 1
Example 2:

Input:
Stack: 11 2 32 3 41
Output: 41 32 11 3 2
Your Task: 
You don't have to read input or print anything. Your task is to complete the function sort() which sorts the elements present in the given stack. (The sorted stack is printed by the driver's code by popping the elements of the stack.)

Expected Time Complexity: O(N*N)
Expected Auxilliary Space: O(N) recursive.
*/


function sortStack(stack , num)
{
    if(stack.isEmpty() || (!stack.isEmpty() && stack.top < num)) // If stack is empty or top value is smaller than num then push the value stop the invocation
    {
        stack.push(num)
        return;
    }
    
    let gum = stack.top()
    stack.pop()
    
    sortStack(stack , num)
    
    stack.push(gum) // push the element remove from the stack
}

function removeStack(stack) // remove all element in stack 
{
    // base case
    if(stack.isEpty) return
    
    // Processisng
    let num = stack.top()
    stack.pop()
    
    removeStack(stack)
    
    sortStack(stack , num) // after stack is Empty , push the element in a sorted manner
}

/* The below method sorts the stack s 
you are required to complete the below method */
Stack.prototype.sort = function() {
  //code here
    sortStack(this.stack)
};

