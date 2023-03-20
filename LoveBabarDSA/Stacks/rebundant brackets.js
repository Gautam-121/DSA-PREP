/*

Given a string of balanced expressions, find if it contains a redundant parenthesis or not. A set of parenthesis is redundant if the same sub-expression is surrounded by unnecessary or multiple brackets. Print ‘Yes‘ if redundant, else ‘No‘.

Note: Expression may contain ‘+‘, ‘*‘, ‘–‘ and ‘/‘ operators. Given expression is valid and there are no white spaces present.

Examples: 

Input: str = “((a+b))” --> (
Output: YES
Explanation: ((a+b)) can reduced to (a+b), this Redundant


Input: str = “(a+(b)/c)”
Output: YES
Explanation: (a+(b)/c) can reduced to (a+b/c) because b is surrounded by () which is redundant.

*/

function checkRebundant(str)
{
    for(let i = 0 ; i<str.length ; i++)
    {
        let char = str[i]  

        if(char == "(" || char == "+" || char == "-" || char == "/" || char == "*")  //if char is open braces or operator add in stack 
        {
            stack.push(char)
        }
        else
        {
            if(char == ")") // if char close braces , ignore alphabets
            {
                let isRebundant = true; // create Flag

                while(stack.top!== "(") // check upto close braces any operator fount or not between open and close braces
                {
                    if(stack.top == "+" || stack.top == "-" || stack.top == "*" || stack.top == "/" )
                    {
                        isRebundant = false
                    }
                    stack.pop()
                }

                if(isRebundant) return true  // if not found return true , its rebundant
                stack.pop() // if found romove the close braces also from stack
            }
        }
    }
    return false // finally no rebundant braces found return false
}