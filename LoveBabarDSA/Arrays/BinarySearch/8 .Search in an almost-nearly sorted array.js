//  Search in an almost sorted array or serach in nearly sorted array

// Given a sorted array arr[] of size N, some elements of array are moved to either of the adjacent positions, i.e., arr[i] may be present at arr[i+1] or arr[i-1] i.e. arr[i] can only be swapped with either arr[i+1] or arr[i-1]. The task is to search for an element in this array.

// Examples : 

// Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, key = 40
// Output: 2 
// Explanation: Output is index of 40 in given array i.e. 2

// Input: arr[] =  {10, 3, 40, 20, 50, 80, 70}, key = 90
// Output: -1
// Explanation: -1 is returned to indicate the element is not present


function findElementNearlySorted(arr , target) {

    let start = 0;
    let end   = arr.length - 1;
    let mid;

    while(start<=end) {

        mid = Math.floor(start + (end - start)/2)

        if(arr[mid] == target) return mid;  // target found at mid

        if(mid-1 >= start && arr[mid-1] == target) return mid-1  // target found at mid-1

        if(mid+1 <= end && arr[mid+1] == target) return mid+1 // target found at mid-1

        else if(target > arr[mid]) {    // determined search space 
            
            start = mid + 2
        }
        else if(target < arr[mid]) {
            
            end = mid - 2
        }

    }
    
    return -1 // target not fount
}

console.log(findElementNearlySorted([10, 3, 40, 20, 50, 80, 70] , 40))



