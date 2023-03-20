/*

Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

 

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
 

Constraints:

1 <= nums.length <= 5 * 104
-109 <= nums[i] <= 109
 
*/


var majorityElement = function(nums) {

    if(nums.length == 0) return []
    
    // step -> 1 Find two majority element usning Voting algo

    let res1 = -1; // Initially No majority element
    let res2 = -1; // Initially No majority element

    let cnt1 = 0; 
    let cnt2 = 0;

    let ans = []

    for(let i=0 ; i<nums.length ; i++)  // Find majortity element
    {
        if(nums[i] == res1) // Find 1st majority element
            cnt1++
        else if (nums[i] ==  res2) // Find 2nd majority element
            cnt2++
        else if(cnt1 == 0) // If majority elent cancelled by any other major element , updatae those cnt = 0
        {
            res1 = nums[i]
            cnt1 = 1
        }
        else if(cnt2 == 0)
        {
            res2 = nums[i]
            cnt2 = 1
        }
        else // if cnt !=0  , the other element start cancelling the majo element
        {
            cnt1--
            cnt2--
        }
    }

    // step-> 2 count frequency of majority element

    cnt1 = 0
    cnt2 = 0

    for(let i = 0 ; i<nums.length ; i++)
    {
        if(nums[i] == res1) cnt1++
        else if(nums[i] == res2) cnt2++
    }
    
    // if frequ is greater than given condition add in ans array
    if(cnt1 > Math.floor(nums.length/3)) ans.push(res1)
    if(cnt2 > Math.floor(nums.length/3)) ans.push(res2)

    return ans
}