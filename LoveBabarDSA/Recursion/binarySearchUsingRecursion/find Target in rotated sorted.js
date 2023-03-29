function serchBinary(arr , start , end , target){

    if(start > end){
        return -1
    }

    let mid = Math.floor( start + (end - start)/2)

    if(arr[mid] == target){
        return mid
    }

    if(arr[mid] == arr[start] && arr[mid] == arr[end]){
        return serchBinary(arr , ++start , --end , target)
    }

    if(arr[mid] > arr[end]){

        if(target >= arr[start] && target < arr[mid]){
            return serchBinary(arr , start , mid-1 , target)
        }
        else
        {
            return serchBinary(arr , mid+1 , end , target) 
        }
    }
    else if(arr[mid] < arr[end]){

        if(target>arr[mid] && target <= arr[mid]){
            return serchBinary(arr , mid+1 , end , target)
        }
        else{
            return serchBinary(arr , start , mid-1 , target )
        }
    }
}