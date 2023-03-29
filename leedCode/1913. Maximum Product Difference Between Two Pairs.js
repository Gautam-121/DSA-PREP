/*

The product difference between two pairs (a, b) and (c, d) is defined as (a * b) - (c * d).

For example, the product difference between (5, 6) and (2, 7) is (5 * 6) - (2 * 7) = 16.
Given an integer array nums, choose four distinct indices w, x, y, and z such that the product difference between pairs (nums[w], nums[x]) and (nums[y], nums[z]) is maximized.

Return the maximum such product difference.


function maxProduct(arr){

    let lar1;
    let lar2;

    let smal1
    let smal2;

    if(arr[0] > arr[1]){
        lar1 = arr[0]
        lar2 = arr[1]
        smal1 = arr[1]
        smal2 = arr[0]
    }
    else{
        lar2 = arr[0]
        lar1 = arr[1]
        smal1 = arr[0]
        smal2 = arr[1]
    }

    for(let val of arr){

        if(val > lar1){
            lar2 = lar1
            lar1 = val
        }
        if(val > lar2){
            lar2 = val
        }
        if(val < smal1){
            smal2 = smal1
            smal1 = val
        }
        if(val < smal2){
            smal2 = val
        }
    }
    
}
 

Example 1:

Input: nums = [5,6,2,7,4]
Output: 34
Explanation: We can choose indices 1 and 3 for the first pair (6, 7) and indices 2 and 4 for the second pair (2, 4).
The product difference is (6 * 7) - (2 * 4) = 34.
Example 2:

Input: nums = [4,2,5,9,7,4,8]
Output: 64
Explanation: We can choose indices 3 and 6 for the first pair (9, 8) and indices 1 and 5 for the second pair (2, 4).
The product difference is (9 * 8) - (2 * 4) = 64.
 
*/

var maxProductDifference = function(nums) {
    
    //     nums.sort((a,b) => a- b)
        
    //     let  ans = (nums[nums.length-1] * nums[nums.length - 2]) - (nums[0]*nums[1]) 
        
    //     return ans
        
        let first;
        let second;
        let third;
        let fourth;
        
        if(nums[0] < nums[1] ) {
            first = nums[0] ;
            second = nums[1]
            third = nums[1]
            fourth = nums[0] 
        }
        else {
            
            first = nums[1] ;
            second = nums[0]
            third = nums[0]
            fourth = nums[1] 
        }
        
        for(let i = 2; i<nums.length; i++) {
            
            if(nums[i]  <= first  ) {
                second = first ;
                first = nums[i]
            }
            else if(nums[i] > first && nums[i] < second) {
                second = nums[i]
            }
            
        }
        
        for(let i = 2; i<nums.length; i++) {
            
            if(nums[i]  >=  third  ) {
                fourth = third ;
                third = nums[i]
            }
            else if(nums[i] < third && nums[i] > fourth) {
                fourth = nums[i]
            }
            
        }
        
       let diff = (third * fourth )   - (first * second)
       
       return diff
        
    };