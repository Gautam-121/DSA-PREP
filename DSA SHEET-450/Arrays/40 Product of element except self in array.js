/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.

 

Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]
Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]


Cnstraints:

2 <= nums.length <= 105
-30 <= nums[i] <= 30
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 

Follow up: Can you solve the problem in O(1) extra space complexity? (The output array does not count as extra space for space complexity analysis.)
*/

// brute force , tc --> O(n^2) , sc --> O(n)

var productExceptSelf = function(nums) {
    
    let arr = []

    for(let i = 0 ; i<nums.length ; i++)
    {
        let product = 1

        for(let j = 0 ; j<nums.length ; j++)
        { 
            if(i == j) continue
            
            product*=nums[j]
        }
      
      arr.push(product)
    }

    return arr
};

// Approch -> 2 , using prefix product , except product itself
// Tc --> O(n) , Sc----O(n) // use approch trapping rain water , for Sc --> O(1)

var productExceptSelf = function(nums) {
    
    let n =  nums.length

    let left = [] // usko chodle uske phle wale tk ka product , left side me

    left[0] = 1

    for(let i = 1 ; i<nums.length ; i++)
    {
        left[i] = nums[i-1] * left[i-1]
    }

    let right = [] // usko chodle uske baad wale tk ka product , right side me

    right[n-1] = 1

    for(let i = n-2 ; i>=0 ; i--)
    {
        right[i] = nums[i+1] * right[i+1]
    }

    for(let i = 0 ; i<nums.length ; i++) // replace in original array
    {
        nums[i] = left[i] * right[i]
    }

    return nums

};



var productExceptSelf = function(arr) {
    
    let count = 0
    let index = -1
    let product = 1

    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] == 0){
            count++
            index = i
            continue;
        }
        product*=arr[i]
    }

    if(count>1) arr.fill(0)
    
    else if(count == 1)
    {
        arr.fill(0)
        arr[index] = product
    }
    else
    {
          for(let i = 0 ; i<arr.length ; i++)
          {
              arr[i] = product/arr[i]
          }
    }

    return arr
};

console.log(productExceptSelf([-1,1,0,-3,3]))