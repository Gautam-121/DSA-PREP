/*

Given an integer array nums, move all the even integers at the beginning of the array 
followed by all the odd integers.

Return any array that satisfies this condition.

 

Example 1:

Input: nums = [3,1,2,4]
Output: [2,4,3,1]
Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
Example 2:

Input: nums = [0]
Output: [0]
 

Constraints:

1 <= nums.length <= 5000
0 <= nums[i] <= 5000

*/

var sortArrayByParity1 = function(nums) {
    
    let i = 0;
    let j = 0;

    while(i<nums.length)
    {
        if(nums[i]%2 == 0)
        {
           [ nums[i] , nums[j]] = [nums[j] , nums[i]]
           i++
           j++
        }
        else{
            i++
        }
    }
    return nums
};

console.log(sortArrayByParity1([4,7,2,5,9,1,74,63]))
// usning Two Pointer

var sortArrayByParity = function(nums) {
    
    let  i = 0;
    let  j = nums.length - 1;
    
    while(i<j) {
        
        while(i<j && (nums[i]&1) == 0)
        {
            i++
        }
        while(i<j && (nums[j]&1) == 1)
        {
            j--
        }

        if(i<j)
        {
            [nums[i] , nums[j]] = [nums[j] , nums[i]]
        }

        i++
        j--
    }
    
    return nums
};

