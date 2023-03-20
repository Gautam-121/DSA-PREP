function swap(arr , n)
{

    for(let i =0 ; i<n-1; i++)
    {
        if(arr[i] > arr[i+1])
        {
            [arr[i] , arr[i+1]] = [arr[i+1] , arr[i]] // 1,2,4,6,7,8
        }
    }
}

function bubbleSort(arr, n)
{
    console.log(arr , n)
    if(n==0 || n==1) return ;
    
    // you can do your small work
    swap(arr , n) 

   // recursive tum sambalna baki ka kam
    bubbleSort(arr , n-1)
}

let arr = [2,8,4,7,6,1]
bubbleSort(arr , arr.length)
console.log(arr)

