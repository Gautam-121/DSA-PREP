/*

Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: true
Explanation: [1,2,3,4,5] is the original sorted array.
You can rotate the array by x = 3 positions to begin on the the element of value 3: [3,4,5,1,2].
Example 2:

Input: nums = [2,1,3,4]
Output: false
Explanation: There is no sorted array once rotated that can make nums.
Example 3:

Input: nums = [1,2,3]
Output: true
Explanation: [1,2,3] is the original sorted array.
You can rotate the array by x = 0 positions (i.e. no rotation) to make nums.


approch -->

if array is already sorted --> [1,2,3,4,5] --> 1 < 2 < 3 < 4 < 5  , (5 > 1)  --> 1 pair

if array is rotated sorted --> [3,4,5,1,2] ---> 3 < 4 < (5 > 1) < 2 , 2 < 3 ---> 1 pair

if arry contain all same element --> [1,1,1,1,1] --> 1 = 1 = 1 = 1 = 1 --> 0 pair

if array not rotated sorted --> [2 , 1 ,3 , 4] ---> (2 > 1) < 3 < 4 , (4 > 2) --> 2 pair

count pair if pair<=1 return true otherwise false
  
*/


var check = function(arr) {

    let count = 0;

    for(let  i = 0 ; i<arr.length-1 ; i++)
    {
        if(arr[i] > arr[i+1])
        {
            count++
        }
    }

    if(arr[arr.length-1] > arr[0]) 
    {
       count++
    }

    return (count > 1) ? false : true
  
};