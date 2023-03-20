function swap(arr , n)
{
    let start = n

    for(let i = n+1 ; i<arr.length ; i++)
    {
        if(arr[start] > arr[i])
        { 
            [arr[start] , arr[i]] =  [arr[i] , arr[start]]
        }
    }
}

function selectionSort(arr , n)
{
    console.log(arr , n)
    // base case
    if(n==arr.length) return;
    
    // you can done only one case
    swap(arr , n)

    // recursion baki smabal lega
    selectionSort( arr , n+1)
}

let arr = [5,4,3,2,1]

selectionSort(arr , 0 )

console.log(arr)