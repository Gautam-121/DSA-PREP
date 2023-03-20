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


