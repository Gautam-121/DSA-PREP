function reverseArray( arr , l , r)
{
    // base case --- 4
    if(l>=r) return;

    // small work , i can do -- 2
    [arr[l] , arr[r]] = [arr[r] , arr[l]]

    // recursion , you can do remainning work -- 3
    reverseArray( arr , l+1 , r-1)
}

let arr = [1,2,3,4,5]
reverseArray(arr , 0 , arr.length-1)

console.log(arr)