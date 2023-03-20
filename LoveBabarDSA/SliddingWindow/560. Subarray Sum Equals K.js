/*

Given an array of integers nums and an integer k, return the total number of subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.

 

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
Example 2:

Input: nums = [1,2,3], k = 3
Output: 2

*/


// Trick --> Flip all the 0 to -1 , thats means --> if arr[i] == 0 ; add sum+=-1 , else if arr[i] == 1 ; add sum+=+1

var subarraySum = function(nums, k) {
    
    let map = new Map()
    let sum = 0;
    
    map.set(sum, 1) // if count Total subArray --> map stored  --> sum , frequency  (sum=0 , 1)
    // if longest length of subArray --> map stored ---> sum , index --> initially (sum=0 , -1)

    let ans = 0;
    for(let  i =0 ;i<nums.length ; i++) {
        
        sum+=nums[i]
        let find = sum - k

        if(map.has(find)) 
        {
           ans+=map.get(find)
        }

        map.set( sum , (map.get(sum) || 0) + 1)
   }
   return ans
};

