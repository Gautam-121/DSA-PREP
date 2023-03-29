/*

In this problem, we are given an infinite array bin[] consisting of boolean values (only 0's and 1's) in sorted order. Our task is to find the index of first 1 in an infinite sorted array of 0's and 1's.

Here, we have an infinite array which guarantees that there exists 1 in the array.

Let's take an example to understand the problem,

Input : bin[] = {0, 0, 0, 1, 1, ....}
Output : 3
Explanation −

let start = 0;
let end = 1

while( !(arr[ start ] >= target && arr[end] <= target)){
    start = end
    end = 2 * end
}

First 1 of the binary array is encountered at index 3.

*/

function findFisrtOccuInfiniteSortedArray(arr , target) {


    let start = 0;
    let end   = 1

    // search space where my target exist

    while(target > arr[end]) {
        
        start = end
        end = end * 2
    }

    let mid;
    let storedInd;

    while(start<=end) {

        mid  = Math.floor( start + (end - start)/2)

        if(arr[mid] == target) {

            storedInd = mid
            end = mid - 1
        }

        else if ( arr[mid] > target) 
           end = mid - 1
        
        else if ( arr[mid] < target)
           start = mid + 1
    }
    
    return storedInd
}

console.log(findFisrtOccuInfiniteSortedArray([0, 0, 0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1] , 1))