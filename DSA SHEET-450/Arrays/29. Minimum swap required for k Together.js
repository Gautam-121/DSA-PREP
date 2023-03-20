/*

Given an array arr of n positive integers and a number k.
 One can apply a swap operation on the array any number of times, 
 i.e choose any two index i and j (i < j) and swap arr[i] , arr[j] . 
 Find the minimum number of swaps required to bring all the numbers less than or equal to k together,
  i.e. make them a contiguous subarray.

Example 1:

Input : 
arr[ ] = {2, 1, 5, 6, 3} 
K = 3
Output : 
1
Explanation:
To bring elements 2, 1, 3 together,
swap index 2 with 4 (0-based indexing),
i.e. element arr[2] = 5 with arr[4] = 3
such that final array will be- 
arr[] = {2, 1, 3, 6, 5}

Example 2:

Input : 
arr[ ] = {2, 7, 9, 5, 8, 7, 4} 
K = 6 
Output :  
2 
Explanation: 
To bring elements 2, 5, 4 together, 
swap index 0 with 2 (0-based indexing)
and index 4 with 6 (0-based indexing)
such that final array will be- 
arr[] = {9, 7, 2, 5, 4, 7, 8}
 

Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function minSwap() that takes an array (arr), sizeOfArray (n), an integer K, and return the minimum swaps required. The driver code takes care of the printing.

Expected Time Complexity: O(N).
Expected Auxiliary Space: O(1).

*/

function minSwap(arr,n,k){
    //code here
    
    let count = 0; // count denote our window size
    
    for(let i = 0 ; i<arr.length ; i++) // count how many element less tahn or equal to k
    {
        if(arr[i] <= k) count++
    }
     
    if(count == 0) return 0 // if no one lass than equal to k , return Zero
    
    let i = 0;
    let j = 0;

    let swapRe = 0  
    let max = Infinity
    
    while(j<arr.length)
    {
        if(arr[j]  > k) swapRe++  // if array element > k , this is my bad element on that window to swap that value consider it
        
        if(j-i+1 < count) j++; // check window size hit or not , if not icrease j++
        
        else{
            
            max = Math.min( max , swapRe) // stored ans , ans is minimum bad value to swap 
             
            if(arr[i] > k) swapRe-- // maintain window size , but before remove i , check this is my bad element or not , if bad element then decrease count from swapRe
            
            i++ // move i pointer ans j pointer for maintaing winode size
            j++
        }
    }
    return max
}



const obj1 = {name : "Gautam"}
const obj2 = {name : "Gautam"}

console.log(obj1 == obj2)
console.log(obj1 === obj2)
console.log(obj1 === obj1)




function minimumSwap(arr , k){

    let count = 0;

    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] <= k){
            count++
        }
    }

    if(count == 0) return 0

    let i = 0;
    let j = 0;

    let swapReq = 0

    let minSwap =  Infinity

    while(j<arr.length){

        if(arr[i] > k) swapReq++

        if(j-i+1 < count) j++

        else{

            minSwap = Math.min(swapReq , minSwap)

            if(arr[i] > k) swapReq--

            i++
            j++
        }
    }


}