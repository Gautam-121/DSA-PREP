function findKey(arr , key)
{
    // base case
    if(arr.length == 0) return false

    // recursively recursion

    if(arr[0] == key)
    {
        return true
    }
    else
    {
        let remaiPart = findKey(arr.slice(1) , key)

        return remaiPart
    }
}
let arr = [2,4,6,8,10]
console.log(findKey( arr, 8))




