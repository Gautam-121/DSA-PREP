/*

Given an integer array nums, find a 
subarray
 that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

 

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit intege

*/


var maxProduct = function(arr) {
    
    let minVal = arr[0];
    let maxVal = arr[0];
      
        let maxProduct = arr[0];

        let n = arr.length
      
        for (let i = 1; i < n; i++)
        {
      
            // When multiplied by -ve number,
            // maxVal becomes minVal
            // and minVal becomes maxVal.
            if (arr[i] < 0)
            {
                [minVal , maxVal] =  [maxVal , minVal]
              
            }
      
            // maxVal and minVal stores the
            // product of subarray ending at arr[i].
            maxVal = Math.max(arr[i], maxVal * arr[i]);
            minVal = Math.min(arr[i], minVal * arr[i]);
      
            // Max Product of array.
            maxProduct = Math.max(maxProduct, maxVal);
        }
      
        // Return maximum product found in array.
        return maxProduct;
    
};

console.log(maxProduct([2,3,-2,4]))










function maxProductSubArray(arr){

    let max = arr[0]
    let mi = max
    let ma = max

    for(let i = 1; i<arr.length ; i++){

        if(arr[i]<0){
            [mi , ma] = [ma , mi]
        }

        ma = Math.max(arr[i] , ma*arr[i])
        mi = Math.min(arr[i] , mi*arr[i])

        max = Math.max(max , ma)
    }

    return max
}