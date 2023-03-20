/*

Given an array of N distinct integers. The task is to write a program to check if this array is sorted and rotated clockwise. 
Note: A sorted array is not considered as sorted and rotated, i.e., there should be at least one rotation

Examples:

Input: arr[] = { 3, 4, 5, 1, 2 }
Output: YES
Explanation: The above array is sorted and rotated
Sorted array: {1, 2, 3, 4, 5}
Rotating this sorted array clockwise 
by 3 positions, we get: { 3, 4, 5, 1, 2}

Input: arr[] = {3, 4, 6, 1, 2, 5}
Output: NO



*/

function checkSortedRotated(arr)
{
    let count = 0;

    for(let i = 1 ; i<arr.length ; i++)
    {
        if(arr[i-1] > arr[i]) count++
    }

    if(arr[arr.length-1] > arr[0]) count++

    return count<=1
}