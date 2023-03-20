function print(arr , start , end )
{
    let str = ""

    for(let i = start ; i<=end ; i++)
    {
        str+=arr[i] + " "
    }
    
    console.log(str)
}


function binarySearch(arr , start , end , key)
{
    // base case 
    if( start  > end) return -1;

    print( arr ,start , end)

    let mid = start + (end-start)/2

    console.log( "The value of mid is -->" , mid)
     
    // recursive
    if(arr[mid] == key) return mid

    else if(arr[mid] > key)
    {
        return binarySearch( arr , mid+1 , end  , key)
    }
    else
    {
        return binarySearch( arr , start , mid - 1  , key)
    }
}

let arr = [19, 17 , 16 , 12 , 10 , 5 , 1]

console.log(binarySearch(arr , 0 , arr.length-1 ,4))