/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109

*/

// Brute force --> O(n2) , sc --> O(1)
// Using HashMap ==> O(n) , O(n)

// Tc --> O(n) , Sc --> O(1)

var majorityElement = function(nums) {

    // Moose Voting algorthm

   // step --> 1 Find majority Element

    let res   = -1; // PreDefined No Element is my majority element
    let count = 0; // Initially count their is Zero

    for(let i = 0 ; i<nums.length ; i++) // Find The majority element in array
    {
        if(res ==  nums[i])  count++  // if We take majority element is same of arr[i] increasr count
        else if(count == 0) // if count ==0, ho jata hai , then majority element change , count then 1  
        {
            res = nums[i]
            count = 1
        }
        else count-- // if We take majority element is not same of arr[i] decrease count , because ye hamare majority element ko kat rha hai
    }
   
   // step --> 2 , count frequncy of majority element 
    count = 0

    for(let i = 0 ; i<nums.length ; i++) //
    {
        if(res== nums[i]) count++
    }

    if(count > Math.floor(nums.length/2)) return res // if count frequncy of majority element  > n/2 then true or false 
    return 0
};



