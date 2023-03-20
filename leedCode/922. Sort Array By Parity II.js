/*

Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.

 

Example 1:

Input: nums = [4,2,5,7]
Output: [4,5,2,7]
Explanation: [4,7,2,5], [2,5,4,7], [2,7,4,5] would also have been accepted.
Example 2:

Input: nums = [2,3]
Output: [2,3]
 

Constraints:

2 <= nums.length <= 2 * 104
nums.length is even.
Half of the integers in nums are even.
0 <= nums[i] <= 1000

*/

// Tc --> O(n)
// Sc --> O(n)

var sortArrayByParityII = function(nums) {
    
    let sortArray = []
    
    let isEven = 0
    let isOdd = 1
    
    for(let i = 0 ; i<nums.length ; i++ ) {
        
        if(nums[i] & 1 ) {
            
            sortArray[isOdd]  = nums[i]
            
            isOdd+=2
            
        }else{
            
            sortArray[isEven]  = nums[i]
            
            isEven+= 2
        }
    }
    
    return (sortArray)
    
};


// Tc --> O(n)
// Sc --> O(1)

function placeEvenOdd(arr)
{
    let i = 0; // Even
    let j = 1 // Odd;

    while(i<arr.length && j<arr.length)
    {
        while(i<arr.length && arr[i]%2 == 0)
        {
            i+=2
        }

        while(j<arr.length && arr[j]%2 == 1)
        {
            j+=2
        }

        if(i<arr.length && j<arr.length)
        {
            [arr[i] , arr[j]] = [arr[j] , arr[i]]
        }

        i+=2
        j+=2
    }

    return arr
}

console.log(placeEvenOdd([4,2,5,7]))