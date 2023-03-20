/*

Given an array, rotate the array to the right by k steps, where k is non-negative.

 

Example 1:

Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
Example 2:

Input: nums = [-1,-100,3,99], k = 2
Output: [3,99,-1,-100]
Explanation: 
rotate 1 steps to the right: [99,-1,-100,3]
rotate 2 steps to the right: [3,99,-1,-100]
 

Constraints:

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105



*/



    function rotate(arr,n){
        //code here
        
        let temp = []
        
        for(let i =0 ; i<arr.length ; i++) {
            
            temp[(i+1)%arr.length] = arr[i]
        }
        
        return temp
    }



    var rotate = function(nums, k) {
 
        function reverse(nums , start , end) {
            
            while(start < end) {
                
                [nums[start] , nums[end]] = [nums[end] , nums[start]]
                
                start++
                end--
            }
        }
            
            k = k%nums.length // If k>arr.length [1,2,3,4] , k = 5 === k = 1 because if rotate after 
            // arr.length-1 , start from 0 index
            
            if(k == 0) return nums
            
            reverse(nums , 0 , nums.length-1)
            reverse(nums , 0 ,k-1);
            reverse(nums , k , nums.length-1)
          
    return nums
       
    };
    
console.log(rotate([1,2,3,4] ,8))