// tc -> O(logn) , sc --> O(1)

let arr = [20 , 17 , 15 ,14 , 13 , 12, 10 ,9 , 8 ,4]
let target = 4

function searchDesce(arr , target) {

    let start  =  0;
    let end    = arr.length - 1;
    let mid;

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

console.log(searchDesce(arr , target))



