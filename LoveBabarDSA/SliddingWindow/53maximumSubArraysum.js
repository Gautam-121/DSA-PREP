var maxSubArray = function(nums) {
    
    let sum = 0;
    let maxi = -Infinity
    
    for(let i = 0 ;i<nums.length ; i++) {
        
        sum+=nums[i]  // step--> 1
        
        maxi = Math.max(sum , maxi)  // step --> 2;
        
        if(sum < 0) sum = 0   // step --> 3
    }
    return maxi
    
};