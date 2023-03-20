/*

Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

 

Example 1:

Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has the minimal length under the problem constraint.
Example 2:

Input: target = 4, nums = [1,4,4]
Output: 1
Example 3:

Input: target = 11, nums = [1,1,1,1,1,1,1,1]
Output: 0
 

Constraints:

1 <= target <= 109
1 <= nums.length <= 105
1 <= nums[i] <= 104

*/

var minSubArrayLen = function(target, nums) {
    
    let min = Infinity
    
    let i = 0;
    let j = 0;
    let sum = 0
    
    while(j<nums.length) {
        
        sum+=nums[j]
        
        
        if(sum < target) {
            j++
        }
        else if (sum >= target) {
            
            min = Math.min(min , (j-i+1))
            
            while(sum >= target) {
                
             sum-=nums[i]
                
             i++
     
             if(sum >= target) {
                 
                 min = Math.min(min , (j-i+1))
              }
                
           }
          j++
            
        }
        
    }
    if( min == Infinity) return 0
    
    return min
};

