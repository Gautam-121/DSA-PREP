/*
Find if there is a pair with a given sum in the rotated sorted Array
Difficulty Level : Medium
Last Updated : 09 Dec, 2022
Read
Discuss(120+)
Courses
Practice
Video

Given an array arr[] of distinct elements size N that is sorted and then around an unknown point, the task is to check if the array has a pair with a given sum X.

Examples : 

Input: arr[] = {11, 15, 6, 8, 9, 10}, X = 16
Output: true
Explanation: There is a pair (6, 10) with sum 16

Input: arr[] = {11, 15, 26, 38, 9, 10}, X = 35
Output: true
Explanation: There is a pair (26, 9) with sum 35


Input: arr[] = {11, 15, 26, 38, 9, 10}, X = 45
Output: false
*/

// Tc --> O(n) , sc --> O(1)

// apprroch --> step --> 1 --> find pivot point , step-->2 , using two pointer approch solve theq

function pivotIndex(arr)
{
    let start = 0 ;
    let end = arr.length - 1;
    
    let mid;

    while(start < end)
    { 
        mid  = Math.floor( start + (end - start)/2)

        if(arr[mid] > arr[end])
        {
            start =  mid + 1
        }
        else if( arr[mid] <= arr[end])
        {
            end = mid
        }
    }
    return end
}

function rotatedSum(arr , target)
{
    if(arr[0]  < arr[arr.length-1]) // already sorted
    {
        let i = 0
        let j = arr.length-1;

        while(i<j)
        {
            let sum = arr[i] + arr[j]

            if( sum ==  target) return true
            else if( sum < target ) i++
            else{
                j--
            }
        }

        return false
    }


    let pivotIn = pivotIndex(arr)

    let i;
    let j;

    if(pivotIn == arr.length-1){
        i = pivotIn
        j = 0
    }


}