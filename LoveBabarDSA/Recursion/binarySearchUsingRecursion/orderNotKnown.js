function binarySearchAsce( arr , start , end , key)
{

    print( arr , start , end)
    // base case
    if(start > end) return -1
    
     let mid = start + ( end - start)/2
    // recursively recursion
     console.log("value of mid1 --->" , mid)

    if(arr[mid] == key) return mid

    else if( arr[mid] > key)
    {
        return binarySearchAsce( arr , start , mid - 1 , key)
    }
    else
    {
        return binarySearchAsce( arr , mid + 1 , end , key)
    }

}


function binarySearchDes(arr , start , end , key)
{
    // base case 
    if( start  > end) return -1;

    let mid = start + (end-start)/2

    console.log( "The value of mid is -->" , mid)
     
    // recursive
    if(arr[mid] == key) return mid

    else if(arr[mid] > key)
    {
        return binarySearchDes( arr , mid+1 , end  , key)
    }
    else
    {
        return binarySearchDes( arr , start , mid - 1  , key)
    }
}
let arr = [19, 17 , 16 , 12 , 10 , 5 , 1]

if(arr[0] < arr[1])
{
    let ans =  binarySearchAsce( arr , 0 , arr.length-1 , 1)
     console.log(ans)
}
else
{
    let ans =  binarySearchDes( arr , 0 , arr.length-1 , 1)
    console.log(ans)
}




