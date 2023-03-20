/*

Given a sorted array arr[] of size N without duplicates, and given a value x. Floor of x is defined as the largest element K in arr[] such that K is smaller than or equal to x. Find the index of K(0-based indexing).

Example 1:

Input:
N = 7, x = 0 
arr[] = {1,2,8,10,11,12,19}
Output: -1
Explanation: No element less 
than 0 is found. So output 
is "-1".
Example 2:

Input:
N = 7, x = 5 
arr[] = {1,2,8,10,11,12,19}
Output: 1
Explanation: Largest Number less than 5 is
2 (i.e K = 2), whose index is 1(0-based 
indexing).
Your Task:
The task is to complete the function findFloor() which returns an integer denoting the index value of K or return -1 if there isn't any such number.

Expected Time Complexity: O(log N).
Expected Auxiliary Space: O(1).

Constraints:
*/


function fllorElementSearch(arr , target) {


    let start = 0 ;
    let end   = arr.length - 1;

    let stoIndex = -1

    let mid;

    while(start<=end) {

        mid = Math.floor( start + (end - start)/2)

       if(arr[mid] == target) return mid

       else if(arr[mid] > target) 
          end = mid - 1 ;

       else if(arr[mid] < target)  {

            stoIndex = mid;
            start = mid  + 1
       }
    }

    return  stoIndex
}

console.log(fllorElementSearch([1,2,8,10,11,12,19] , 13))

