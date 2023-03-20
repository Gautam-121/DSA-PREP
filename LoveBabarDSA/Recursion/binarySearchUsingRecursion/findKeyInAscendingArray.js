function print( arr , start , end)
{
    let str = ""

    for(let i= start ; i<=end ; i++)
    { 
        str+=arr[i] + " "
    }

    console.log(str)
}


function binarySearch( arr , start , end , key)
{

    print( arr , start , end)
    // base case
    if(start > end) return -1
    
     let mid = start + ( end - start)/2
    // recursively recursion
     console.log("value of mid --->" , mid)

    if(arr[mid] == key) return mid

    else if( arr[mid] > key)
    {
        return binarySearch( arr , start , mid - 1 , key)
    }
    else
    {
        return binarySearch( arr , mid + 1 , end , key)
    }

}

let arr = [2,4,6,10,14,16,18]

console.log(binarySearch( arr , 0 , arr.length-1 , 585))






