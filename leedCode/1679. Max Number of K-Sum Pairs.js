/*

You are given an integer array nums and an integer k.

In one operation, you can pick two numbers from the array whose sum equals k 
and remove them from the array.

Return the maximum number of operations you can perform on the array.

 

Example 1:

Input: nums = [2,5,4,4,1,3,4,4,1,4,4,1,2,1,2,2,3,2,4,2], k = 3
Output: 2
Explanation: Starting with nums = [1,2,3,4]:
- Remove numbers 1 and 4, then nums = [2,3]
- Remove numbers 2 and 3, then nums = []
There are no more pairs that sum up to 5, hence a total of 2 operations.

*/

//Tc --> O(nlogn + n)

var maxOperations = function(arr, k) {
    
    arr.sort((a,b)=>a-b)

    let i = 0;
    let j = arr.length - 1;

    let count = 0

    while(i<j){

        if(arr[i] + arr[j] == k){
            count++
            i++
            j--
        }

        else if(arr[i] + arr[j] < k){
            i++
        }

        else{
            j--
        }
    }
    return count
};


//Tc --> O(n)
//sc --> O(n)
var maxOperations = function(nums, k) {
    
    let map = new Map() 
    let count = 0
    
    for(let  i = 0 ; i<nums.length ; i++)
    {

    let val = k - nums[i]
 //to check if that k-nums[i] present and had some value left or already paired
        if(map.has(val) && map.get(val) > 0)
        {
            count++
            
            map.set(val , map.get(val) - 1)
        }
        else
        {
//getOrDefault is easy way it directly checks if value is 0 returns 0 where I added 1
//and if some value is present then it return that value "similar to map.get(i)" and I added 1 on it 
            map.set(nums[i] , (map.get(nums[i]) || 0) + 1)
        }
    }
   
   return count
};
console.log(maxOperations([1,2,3,4] , 5))