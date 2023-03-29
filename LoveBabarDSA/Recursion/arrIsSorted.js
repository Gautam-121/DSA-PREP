function isSorted(arr)
{
    if(arr.length == 0 || arr.length == 1) return true

    // recursively recursion
    if(arr[0] > arr[1])
    {
        return false
    }
    else
    {
        let ans =  isSorted(arr.slice(1))
        return ans
    }
}

let arr = [2,4,10,8,10]
let bool = isSorted(arr)

console.log(bool ?  "Array is Sorted": "Array is Not Sorted")


function sorted(arr , i , j){

    if(j == arr.length){
        return true
    }

    if(arr[i] > arr[j]){
        return false
    }

    return sorted(arr , ++i , ++j)
}

let arr1 = [1,2,3,5,4]

if(sorted(arr1 , 0 , 1) == true)
{
    console.log("Array is Sorted")
}
else
{
    console.log("Array is Not sorted")
}
