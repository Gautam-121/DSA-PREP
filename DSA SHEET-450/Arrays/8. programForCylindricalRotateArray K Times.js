// Brute Force --> Tc --> O(n) , Sc --> O(n)

function rotate1(arr,k){
    //code here
    
    let temp = []
    
    for(let i =0 ; i<arr.length ; i++) {
        
        temp[(i+k)%arr.length] = arr[i]
    }
    
    return temp
}


// Tc ---> O(N)  , Sc --> O(1)
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
        if(k<0) 
        {
           k = k + arr.length // k = -1 means rotate array one time in left side 
        }                     // convert left side rotation t0 right side
        
        reverse(nums , 0 , nums.length-1)
        reverse(nums , 0 ,k-1);
        reverse(nums , k , nums.length-1)
        
};



console.log(rotate([1,2,3,4,5] , 3))



















