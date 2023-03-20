/*

Given an array of integers (A[])  and a number x, 
find the smallest subarray with sum greater than the given value.
 If such a subarray do not exist return 0 in that case.

Note: The answer always exists. It is guaranteed that x doesn't exceed the summation of a[i] (from 1 to N).

Example 1:

Input:
A[] = {1, 4, 45, 6, 0, 19}
x  =  51
Output: 3
Explanation:
Minimum length subarray is 
{4, 45, 6}

Example 2:
Input:
A[] = {1, 10, 5, 2, 7}
   x  = 9
Output: 1
Explanation:
Minimum length subarray is {10}
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function smallestSubWithSum() which takes the array A[], its size N and an integer X as inputs and returns the required ouput.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/

// function smallestSubWithSum(arr,n,x){
//     //code here
//     let i = 0;
//     let j = 0;
    
//     let sum = 0
//     let len = Infinity
    
//     while(j<arr.length)
//     {
//         sum+=arr[j]
        
//         if(sum <= x) j++
        
//         else if (sum >x)
//         {
//             while(sum > x)
//             {
//                len = Math.min(len , j-i+1 ) 
               
//                sum-=arr[i]
               
//                i++
//             }
            
//             j++
//         }
//     }
//     return len
// }





function smaller(arr , k){

    let i = 0;
    let j = 0;
    let min = Infinity

    let startIndex = 0;
    let endIndex  = 0

    let sum = 0

    while(j<arr.length){

        sum+=arr[j]

        if(sum<=k) j++
        else{

            while(sum > k){
                
                if((j-i+1) < min){
                    startIndex = i
                    endIndex = j
                    min = j-i+1
                }

                sum-=arr[i]
                i++
            }

            j++
        }
    }

    console.log(startIndex , endIndex , min)
}

smaller([1, 4, 45, 6, 0, 19] , 51)


