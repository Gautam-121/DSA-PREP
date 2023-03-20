/*

Given a bitonic sequence of n distinct elements, and an integer x, the task is to write a program to find given element x in the bitonic sequence in O(log n) time. 

A Bitonic Sequence is a sequence of numbers that is first strictly increasing then after a point decreasing.

Examples: 

Input :  arr[] = {-3, 9, 18, 20, 17, 5, 1}, key = 20
Output : Found at index 3

Input :  arr[] = {5, 6, 7, 8, 9, 10, 3, 2, 1}, key = 30
Output : Not Found

Naive Approach: A simple solution is to do a linear search. The time complexity of this solution would be O(n).

Efficient Approach: An efficient solution is based on Binary Search. 

The idea is to find the bitonic point ‘k’ which is the index of the maximum element of a given sequence. 
If the element to be searched is greater than the maximum element return -1, 
else search the element in both halves. 
Below is the step by step algorithm on how to do this.

Find the bitonic point in the given array, i.e the maximum element in the given bitonic array. This can be done in log(n) time by modifying the binary search algorithm. You can refer to this post on how to do this.
If the element to be searched is equal to the element at the bitonic point then print the index of the bitonic point.
If the element to be searched is greater than the element at a bitonic point then the element does not exist in the array.
If the element to be searched is less than the element at a bitonic point then search for the element in both halves of the array using binary search.

*/


// function maxBiotonicArray(arr) {

//     let start = 0;
//     let end = arr.length - 1;

//     let mid;

//     while (start <= end) {

//         mid = Math.floor(start + (end - start) / 2)

//         if (arr[mid] >= arr[0] && arr[mid] > arr[mid + 1]) {
//             return mid
//         }
//         else if (arr[mid] >= arr[0] && arr[mid] < arr[mid + 1])
//             start = mid + 1
//         else {
//             end = mid
//         }
//     }
//     return end
// }

// function binarySearchAscending(arr , start , end , target) {

//     while(start<=end) {

//         let mid = Math.floor( start + (end - start)/2)

//         if(arr[mid] == target) return mid

//         else if (arr[mid] > target) 
//            end = mid - 1

//         else if (arr[mid] < tar) 
//            start = mid + 1
//     }
//     return false
// }

// function binarySearchDecending(arr , start , end , target) {

//     while(start<=end) {

//         mid = Math.floor(start + (end - start)/2)

//         if(target == arr[mid]) 
//           return mid
//         else if(target > arr[mid])
//            end = mid  - 1
//         else if(target < arr[mid])
//            start = mid + 1
//     }

//     return  -1
// }

// function targetInBiotonicArray(arr , target) {


//     let find = maxBiotonicArray(arr)
//     console.log(find)

//     if (target >= arr[0] && target <= arr[find]) {  // -3, 9, 18, 20, 17, 5, 1

//         console.log("gaiyam")


//         let checkValue = binarySearchAscending(arr, 0, find - 1 , target)

//         console.log(checkValue)

//         if (checkValue >= 0 && checkValue <= find - 1) {
//             return checkValue

//         } else {
//             return -1
//         }
//     }
//     else if (target <= arr[arr.length - 1] && target > arr[find]) { -3, 9, 18, 20, 17, 5, 1

//         let checkValue = binarySearchDecending(arr, find+1, arr.length - 1 , target)

//         console.log("dhakate")


//         if (checkValue >= find && checkValue <= arr.length - 1) {
//             return checkValue

//         } else {
//             return -1
//         }
//     }
//    return -1
// }

// console.log(targetInBiotonicArray([-3, 9, 18, 20, 17, 5, 1],20))


function maxBiotonicElement(arr) {

    let start = 0;
    let end = arr.length - 1;

    let mid;

    while (start <= end) {

        mid = Math.floor(start + (end - start) / 2)

        if (arr[mid] >= arr[0] && arr[mid] > arr[mid + 1]) {
            return mid
        }
        else if (arr[mid] >= arr[0] && arr[mid] < arr[mid + 1])
            start = mid + 1
        else {
            end = mid
        }
    }
    return end
}


function binarySearchAscending(arr , start , end , target) {

    while(start<=end) {

        let mid = Math.floor( start + (end - start)/2)

        if(arr[mid] == target) return mid

        else if (arr[mid] > target) 
           end = mid - 1

        else if (arr[mid] < target) 
           start = mid + 1
    }
    return -1
}

function binarySearchDecending(arr , start , end , target) {

    while(start<=end) {

        mid = Math.floor(start + (end - start)/2)

        if(target == arr[mid]) 
          return mid
        else if(target > arr[mid])
           end = mid  - 1
        else if(target < arr[mid])
           start = mid + 1
    }

    return  -1
}

let arr = [-3, 9, 18, 20, 17, 5, 1]
let target = 20

let index = maxBiotonicElement(arr)

let ascending  =  binarySearchAscending(arr , 0 , index-1 , target)
let decending  =  binarySearchDecending(arr , index , arr.length-1 , target)

if(ascending == -1 && decending == -1) return -1
else if(ascending == -1)  console.log(decending) 
else {
    console.log(ascending)
}
