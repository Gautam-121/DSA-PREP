/*

Given a binary array nums and an integer k, return the maximum number of consecutive 1's in the array if you can flip at most k 0's.

 

Example 1:

Input: nums = [1,1,1,0,0,0,1,1,1,1,0], k = 2
Output: 6
Explanation: [1,1,1,0,0,1,1,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined.
Example 2:

Input: nums = [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k = 3
Output: 10
Explanation: [0,0,1,1,1,1,1,1,1,1,1,1,0,0,0,1,1,1,1]
Bolded numbers were flipped from 0 to 1. The longest subarray is underlined

*/


var longestOnes = function(nums, k) {
    
    let i = 0;
    let j = 0;
    let count = 0
    let max = 0
    
    while(j<nums.length) {
        
        if(nums[j] == 0) {
            count++
        }
        
        if(count <=k ) {
            
            max = Math.max(max , j-i+1) 
            
            j++
            
        }
        else if (count > k) {
            
            while(count > k) {
                
                if(nums[i] == 0) {
                    count--
                }
                
                i++
            }
            j++
        }
    }
    return max
    
};

console.log(longestOnes([1,1,1,0,0,0,1,1,1,1,0] , 2))


function one(arr , k)
{
    let i = 0;
    let j = 0;
    let max = -Infinity

    while(j<arr.length)
    {
        if(arr[j] == 0)
        {
            k--
        }

        if(k>=0)
        {
           max = Math.max( max , (j-i+1)) 
           j++
        }
        else 
        {
           
            while(k<0)
            {
                if(arr[i] == 0) k++
                i++
            }
            j++
        }
    }
    return max
}

console.log(one([1,1,1,0,0,0,1,1,1,1,0] , 2))
