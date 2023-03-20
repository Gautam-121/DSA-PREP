/*

given an unsorted array Arr of size N of positive integers. One number 'A' from set {1, 2, …N} is missing and one number 'B' occurs twice in array. Find these two numbers.

Example 1:

Input:
N = 2
Arr[] = {2, 2}
Output: 2 1
Explanation: Repeating number is 2 and 
smallest positive missing number is 1.
Example 2:

Input:
N = 3
Arr[] = {1, 3, 3}
Output: 3 2
Explanation: Repeating number is 3 and 
smallest positive missing number is 2.
Your Task:
You don't need to read input or print anything. Your task is to complete the function findTwoElement() which takes the array of integers arr and n as parameters and returns an array of integers of size 2 denoting the answer ( The first index contains B and second index contains A.)

Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)

*/


// approch --> step --1 find duplicate number in array , as i know array contain only one duplicate number
// step --2 using simple maths , to find missing number

function findDupMis(arr)
{
    let sum = 0
    let n = arr.length
    
    //calculate sum of all the number in array before manupulating the array
    for(let i = 0 ; i<arr.length ; i++) sum+=arr[i]

    // find duplicate number in array , using moose voting algo , find majority element

   let duplicate = -1; // duplicate
   let count = 0;

   for(let i = 0 ; i<arr.length ; i++)
   {
       if(arr[i] == duplicate) count++
       else if(count == 0)
       {
        duplicate = arr[i]
        count = 1
       }
       else
       {
           count--
       }
   }
    // remove that duplicate element from sum and then and your sum is distinct of all remainning element
    let remainingSum = sum - duplicate

    // calculate total sum of n --> n --> 5  , TotalSum is 15
    let totalSumUptoN = (n * (n+1))/2
    
    // calculate missing Number
    let missing = totalSumUptoN - remainingSum

    console.log(missing , duplicate)
}

console.log(findDupMis([3,1,2,5,3]))






























































