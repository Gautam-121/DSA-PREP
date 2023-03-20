// approch -1 -->

// only one unique element appers and all remaining element have apper twice

function usedXor(arr)
{
    let ans = 0

    for( let i = 0 ; i<arr.length ; i++)
    {
       ans^=arr[i]
    }

    return ans
}

// many unique element appers and all remaining element have apper twice

function usedOneMap(arr)
{
   let map = new Map()

   for(let i = 0 ; i<arr.length ; i++)
   {
       if(map.has(arr[i]))
       {
            map.delete(arr[i])
       }
       else
       {
           map.set( arr[i] , 1)
       }
   }
   return (map.size == 0) ? -1 : map
}


// many unique element appers and all remaining element have apper more number of time

function usedTwoMap(arr)
{
   let map = new Map()
   let map1 = new Map()

   for(let i = 0 ; i<arr.length ; i++)
   {
       if(map.has(arr[i]))
       {
            map1.delete(arr[i])
       }
       else
       {
           map.set( arr[i] , 1)
           map1.set( arr[i] , 1)
       }
   }
   return (map1.size == 0) ? -1 : map1
}

console.log(usedTwoMap([2,3,4,1,2,4,8,4,6,2,4,5,11,12]))






















