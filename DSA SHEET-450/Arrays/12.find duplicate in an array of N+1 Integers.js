/*

Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only constant extra space.

 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
Example 2:

Input: nums = [3,1,4,3,2]
Output: 3

*/


// if only one duplicate value appers twice  --->  used xor method || circular method || moose algorithm

// if more than one duplicate value present but frequency two ---> used index element serach method

// if more than one duplicate apper and frequency more than two  --> used hashmap method

// Using Moose Counting algo , find majority element in array
function mooseAlg(arr)
{
   let num = -1;
   let count = 0;

   for(let i = 0 ; i<arr.length ; i++)
   {
       if(arr[i] == num) count++
       else if(count == 0)
       {
           num = arr[i]
           count = 1
       }
       else
       {
           count--
       }
   }
   return num
}

console.log(mooseAlg([1,2,3,4,3 ,4 ,4]))


var findDuplicate1 = function(nums) {

    let ans = 0

    for(let i = 0 ; i<nums.length ; i++) 
    {
        ans^=nums[i]  // 0^4^2^3^1^2  --> 0^4^3^1
    }

    for(let i = 1 ; i<nums.length ; i++) 
    {
        ans^i   // --> 0^4^3^1^1^2^3^4  --> 2
    }

    return ans
}

console.log(findDuplicate1([4,2,3,1,2]))


var findDuplicate = function(nums) {
    
    let slow = nums[0];
    let fast = nums[0];

    do{

        slow = nums[slow];
        fast = nums[nums[fast]]
    }while(slow!=fast)

    fast = nums[0];

    while(slow != fast) {

        slow = nums[slow];
        fast = nums[fast]
    }

    return slow
}


var findDuplicate1 = function(nums) {

    let ans = []

    for(let i=0 ; i<nums.length ;i++) {
        
        let x  = Math.abs(nums[i])
        let index = x-1;

        if(nums[index] < 0) {
            ans.push(x)
        }
        else{
            nums[index] = nums[index] * -1
        }
    }
    return ans
}

console.log(findDuplicate1([3,1,4,3,2,2]))


var findDuplicate1 = function(nums) {

   let map = new Map()
   let ans = []

   for(let  i = 0 ; i<nums.length ; i++)
   {
      map.set(nums[i] , (map.get(nums[i]) || 0) + 1)
   }

   map.forEach((value , key) => 
   { 

    if(value > 1) 
    {
        ans.push(key)
    }

   })

//    for(let pair of map)
//     {
        
//     if(pair[1] > 1) duplicate.push(pair[0])
//    }

   return ans
}

console.log(findDuplicate1([3,1,4,3,2,2]))




var findDuplicate2 = function(nums) {

    let map = new Map()
    let map1 = new Map()
 
    for(let  i = 0 ; i<nums.length ; i++)
    {
       if(map.has(nums[i])) 
       {
        map.set( nums[i] , (map.get(nums[i]) || 0) + 1)
        map1.set( nums[i] , map.get(nums[i]))  
       }
       else
       {
        map.set(nums[i] , 1)
       }
    }

    return map1
 }
 
 console.log(findDuplicate2([3,1,4,3,2,2,3]))
 






















