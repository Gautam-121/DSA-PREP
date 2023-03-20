// first occurance and last occurance of element


function firstOccu(arr , target) {

    let start = 0;
    let end   = arr.length - 1;
    let firstOcc = -1

    while(start<=end) {

        mid = Math.floor(start + (end - start)/2)

        if(target == arr[mid]){
             
            firstOcc = mid;
            end = mid - 1
        }
        else if(target > arr[mid]) 
           start = mid  + 1
        else if (target < arr[mid])
           end = mid - 1
    }

    return firstOcc
}

function lastOccu(arr , target) {

    let start = 0;
    let end   = arr.length - 1;
    let secondOcc = -1

    while(start<=end) {

        mid = Math.floor(start + (end - start)/2)

        if(target == arr[mid]){
             
            secondOcc = mid;
            start = mid + 1
        }
        else if(target > arr[mid]) 
           start = mid  + 1
        else if (target < arr[mid])
           end = mid - 1
    }

    return secondOcc
}

let firstOcc =  firstOccu([1,2,3,4,5,6,7,7,7,7,8] , 77)
let lastOcc =   lastOccu([1,2,3,4,5,6,7,7,7,7,8] , 77)

console.log(firstOcc , lastOcc );



