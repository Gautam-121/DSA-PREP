/*

Given an array of positive integers. Find the length of the longest sub-sequence such that elements
 in the subsequence are consecutive integers, the consecutive numbers can be in any order.
 

Example 1:

Input:
N = 7
a[] = {2,6,1,9,4,5,3}
Output:
6
Explanation:
The consecutive numbers here
are 1, 2, 3, 4, 5, 6. These 6 
numbers form the longest consecutive
subsquence.
Example 2:

Input:
N = 7
a[] = {1,9,3,10,4,20,2}
Output:
4
Explanation:
1, 2, 3, 4 is the longest
consecutive subsequence.

Your Task:
You don't need to read input or print anything. Your task is to complete the 
function findLongestConseqSubseq() which takes the array arr[] and the size 
of the array as inputs and returns the length of the longest subsequence of 
consecutive integers. 

*/

// Tc --> O(n)
// Sc --> O(n)

function conSub(arr)
{
    if(arr.length == 0) return  0 // Length is 0 , there is No sequence

    let set = new Set()

    for(let i = 0 ; i <arr.length ; i++)  // store all this value in set
    {
        set.add(arr[i])
    }

    let maxLength = 1

    for(let i = 0; i<arr.length ; i++)
    {
        if(!set.has(arr[i] - 1)) // check Number-1 is present , that means this is not my starting consecutive sequence
        {                        // if not that means it possible starting of consecutive subSequence
            let cntLength = 0
            let valueAtSet = arr[i]

            while(set.has(valueAtSet)) // check upto consecutive subsequence fount , and increase thir length
            {
                cntLength++
                valueAtSet++
            }

            maxLength = Math.max(maxLength , cntLength) // stored max Length of consecutive subsequence        
        }
    }
    return maxLength
}