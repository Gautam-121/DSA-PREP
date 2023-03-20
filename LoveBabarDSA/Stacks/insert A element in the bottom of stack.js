/*
Given a stack S and an integer N, the task is to insert N at the bottom of the stack.

Examples:

Input: N = 7
S = 1 <- (Top)
     2
     3
     4
     5
Output: 1 2 3 4 5 7

Input: N = 17
S = 1 <- (Top)
     12
     34
     47
     15
Output: 1 12 34 47 15 17
*/

function solve(stack , ele)
{
    if(stack.isEmpty())
    {
        stack.push(ele)
        return
    }
    
    // stored at top , remove 
    let nums = stack.top()
    stack.pop()
    
    // recursive call
    solve(stack , ele)
    
    // push the element store
    stack.push(nums)
}

function insertBottom(stack , ele)
{
    solve( stack , ele)

    console.log(stack)
}

