function firstOccurance( arr , start , end , key)
{
    // base case
    if( start > end) return -1;

    let mid = start + ( end - start)/2
    
    // recursive relation
    if( arr[mid] == key) 
    {
        return firstOccurance(arr , start , mid-1 , key)
    }
    else if( arr[mid] > key)
    {
        return firstOccurance( arr , start , mid-1 , key)
    }
    else
    {
        return firstOccurance( arr , mid+1 , end , key)
    } 
}

let arr = [1,2,4,5,6,6,6,6,10,19]
let count = -1
console.log( firstOccurance( arr , 0 , arr.length-1 , 6 , count))






