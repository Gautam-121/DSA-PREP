// Tc --> O(logn) , sc --> O(1)

let arr = [1,2,3,4,5,6,7,8,9]

function searchBina(arr , target) {

    let start  = 0 ;
    let end    = arr.length - 1;
    let mid;

    while(start<=end) {
      
        mid = Math.floor(start + (end - start)/2)

        if(target == arr[mid])
            return mid
        else if(target < arr[mid]) 
            end = mid - 1
        else if(target > arr[mid])
            start = mid + 1
    }
    return -1
}

console.log(searchBina(arr , 11))





