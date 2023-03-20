// Same as koko eating banannas

/*

Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

The test cases are generated so that there will be an answer.

 

Example 1:

Input: nums = [1,2,5,9], threshold = 6
Output: 5
Explanation: We can get a sum to 17 (1+2+5+9) if the divisor is 1. 
If the divisor is 4 we can get a sum of 7 (1+1+2+3) and if the divisor is 5 the sum will be 5 (1+1+1+2). 
Example 2:

Input: nums = [44,22,33,11,1], threshold = 5
Output: 44


function isPossible(arr , thr , mid)
{
    let sum = 0;

    for(let i = 0 ; i<arr.length ; i++)
    {
        sum+=Math.ceil(arr[i]/mid)

        if(sum > thr) return false
    }

    return true
}

function divisor(arr , threshould)
{
    let start = 0;
    let end  =  math.max(...arr)

    let ans = end
    let mid;

    while(start<=end)
    {
        mid = start + (end-start)/2

        if(isPossible(arr , threshould , mid))
        {
            ans  = mid
            end = mid - 1
        }
        else 
        {
            start = mid + 1
        }
    }
    return ans
}

*/


var smallestDivisor = function(nums, threshold) {
    
    
    function isPossible(nums , mid , threshold) {
        
         let divisorSum = 0
        
        for(let i = 0 ; i<nums.length; i++) {
            
            divisorSum+=Math.ceil(nums[i]/mid) 
       }
        
        if(divisorSum<=threshold) return true
        
        return false
    
    }
    
    
    let sum  = 0;
    
    for(let  i =0 ; i<nums.length ; i++) {
        
        sum+=nums[i]
    }
    
    
    let start = 0;
    let end = sum;
    let ans = sum
    
    let mid ;
    
    while(start<=end) {
        
        mid  = Math.floor(start + (end - start)/2)
        
        if( isPossible(nums ,mid,threshold)== true) {
            
            ans  = mid ;
            end  = mid - 1
        }
        else {
            
            start =  mid + 1
        }
        
       
    }
    return ans
};