// given only array is sorted but not known ascending or decscending;

function orderNotKnown(arr , target) {

    if(arr.length == 1 && arr[0] == target) {
        return 0
    }

    if(arr[0] > arr[1]) { // ascending

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
   else{ // descending
     
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
}

console.log(orderNotKnown([4,3,2,1] , 0))









