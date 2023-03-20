/*

Given a sorted array and a value x, the ceiling of x is the smallest element in an array greater than or equal to x, and the floor is the greatest element smaller than or equal to x. Assume that the array is sorted in non-decreasing order. Write efficient functions to find the floor and ceiling of x. 
Examples : 

For example, let the input array be {1, 2, 8, 10, 10, 12, 19}
For x = 0:    floor doesn't exist in array,  ceil  = 1
For x = 1:    floor  = 1,  ceil  = 1
For x = 5:    floor  = 2,  ceil  = 8
For x = 20:   floor  = 19,  ceil doesn't exist in array
In the below methods, we have implemented only ceiling search functions. Floor search can be implemented in the same way.

*/

function ceilOfSortedArray(arr , target) {

    let start  = 0;
    let end    = arr.length - 1;

    let mid;

    while(start<=end) {

        mid = Math.floor(start + (end - start)/2)

        if(arr[mid] == target) return mid;

        else if( arr[mid] > target) {
           
            res = mid;
            end = mid  - 1
        }
        else if( arr[mid] < target) {

            start = mid + 1
        }
    }
    return  - 1
}


