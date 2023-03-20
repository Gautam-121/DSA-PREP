function sumOfArray(arr)
{
    // base case
    if(arr.length==0) return 0

    // recursively 
    return arr[0] + sumOfArray(arr.slice(1))
}

let arr = [3 , 2 , 5 , 1 , 6]
console.log(sumOfArray(arr))

