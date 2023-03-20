/*
Find maximum element in Bitonic Array prodevelopertutorial July 15, 2020
Problem statement:

Given an bitonic array, find the max element in that.

Example:

Array {1, 2, 3, 4, 5, 4, 3, 2, 1};

Output = 5

A bitonic array is an ascending sorted array where, after a particular element, the array starts descending.

In our example above, the array is ascending till element 5 and starts descending after that.

Solution:

We can solve this with help of binary search.

We need to perform below tasks:

1. If the mid element is greater than left and right element, then it is the maximum.

2. If mid element is greater than its right element and smaller than the left element, then maximum is on left side of mid. Example array: {2, 40, 9, 8, 6, 5}

*/


function maxBiotonicArray(arr) {

    let start = 0;
    let end   = arr.length - 1;

    let mid;

    while(start<end) {

        mid  = Math.floor( start + (end - start)/2)

        if(arr[mid] > arr[mid-1] && arr[mid] > arr[mid +1]) {
            return arr[mid]
        }
        else if( arr[mid] >= arr[0] && arr[mid] < arr[mid + 1])
             start = mid + 1
        else {
            end  =  mid
        }
    }
   return arr[mid]
}

console.log(maxBiotonicArray([1, 2, 3, 4, 5,6, 4, 3, 2, 1]))