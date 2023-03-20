/*

Reverse a Stack
MediumAccuracy: 81.33%Submissions: 15K+Points: 4
Lamp
Stand out from the crowd. Prepare with Complete Interview Preparation  

You are given a stack St. You have to reverse the stack using recursion.

Example 1:

Input:
St = {3,2,1,7,6}
Output:
{6,7,1,2,3}
Example 2:

Input:
St = {4,3,9,6}
Output:
{6,9,3,4}
Your Task:

You don't need to read input or print anything. Your task is to complete the function Reverse() which takes the stack St as input and returns the reversed stack.
*/

function insertBottom(stack , ele)
{
    // base case
    if(stack.isEmpty())
    {
        stack.push(ele)
        return
    }

    let top = stack.top()
    stack.pop()
    insertBottom(stack , ele)

    stack.push(top)
}

function reverse(stack)
{
    // base case
    if(stack.isEmpty()) return

    let top = stack.top()
    stack.pop()

    reverse(stack)

    insertBottom(top)
}

function reversseAStack(stack)
{
    reverse(stack)
}



// void insertAtBottom(stack<int> &s, int element) {
//     //basecase
//     if(s.empty()) {
//         s.push(element);
//       	return ;
//     }
    
//     int num = s.top();
//     s.pop();
    
//     //recursive call
//     insertAtBottom(s, element);
    
//     s.push(num);
// }

// void reverseStack(stack<int> &stack) {
//   	//base case
//     if(stack.empty()) {
//         return ;
//     }
    
//     int num = stack.top();
//     stack.pop();
    
//     //recursive call
//     reverseStack(stack);
    
//     insertAtBottom(stack,num);
// }