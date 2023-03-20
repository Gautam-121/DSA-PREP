/*
Given a brackets expression, find a minimum number of bracket reversals required to make an expression balanced using Stack.

 

Expression-1 =  “}{“ 

Here 2 brackets reversals needed to make expression balanced “{}”.

 

Expression-2 = “{{” 

Here 1 bracket reversals needed to make expression balanced “{}”.

 

Write a function:
        int solution(char* S)

 

that accept brackets expression as string S. The function should return a minimum number of brackets reversals required to convert expression balanced. If a string can not be made balanced bracket expression then return -1.

 

Input
    }{

 

    where,

The first line represents a bracket expression as a string.
 

Output
    2

 

Assume that,

The expression contains only brackets.
brackets can be '{' and '}'.
Length of string can be [1 to 10000] 
*/


function minimumCostValid(str)
{
    for(let i = 0 ; i<str.length ; i++)
    {
        let char = str[i]

        if(char == "{") // open braces push inside the stack
        {
            stack.push(char)
        }
        else
        {
           if(!stack.isEmpty()) // close braces , if stack is not empty , then check for this open braces close braces is present
           {
             if(stack.top == "}")
             {
                stack.pop()
             }
             else
             {
                stack.push(char)
             }
           }
           else
           {
            stack.push(char) // if stack is empty push elemet into the stack
           }
        }
    }

    let a = 0 // denote number open braces
    let b = 0 // denote number of close braces

    while(!stack.isEmpty())
    {
        if(stack.top == "{")
        {
            a++
        }
        else
        {
            b++
        }
    }

    let minimumCost = Math.floor((a+1)/2) + Math.floor((b+1)/2)

    return minimumCost
}