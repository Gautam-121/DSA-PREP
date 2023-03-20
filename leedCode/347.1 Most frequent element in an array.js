/*

Given an array, find the most frequent element in it. If there are multiple elements that appear a maximum number of times, print any one of them.

Examples: 

Input : arr[] = {1, 3, 2, 1, 4, 1}
Output : 1
Explanation: 1 appears three times in array which is maximum frequency.

Input : arr[] = {10, 20, 10, 20, 30, 20, 20}
Output : 20

*/

// brute forc , Tc --> O(n2)
// sc --> O(1)

function mostFrequent(arr)
{
    let maxCount = -Infinity
    let val      = -1

    for(let  i = 0 ; i<arr.length ; i++)
    {
        let count = 0

        for(let j = 0 ; j<arr.length ;j++)
        {
            if(arr[i] ==  arr[j]) count++
        }

        if(count > maxCount)
        {
            maxCount =  count
            val      = arr[i]
        }
        else if(count ==  maxCount)
        {
            val = Math.max( val , arr[i])
        }
    }

    return val
}

// Tc --> O(nlogn)
// sc --> O(1)

function mostFrequent1(arr)
{
    arr.sort((a,b) => a-b)
    
    let maxCount = -Infinity
    let val = arr[0]

    for(let i = 0 ; i<arr.length-1; i++)
    {
        let count = 1 ;

        while(arr[i] ==  arr[i+1])
        {
            count++
        }

        if(count > maxCount)
        {
            maxCount = count
            val      = arr[i]
        }
        else if(count == maxCount)
        {
            val = Math.max(val , arr[i])
        }
    }
    return val
}

// Tc --> O(n)
// Sc --> O(n)
function mostFrequent1(arr)
{
    let map = new Map()

    for( let i = 0 ;i<arr.length ; i++)
    {
        map.set( arr[i] , (map.get(arr[i]) || 0) + 1)
    }

    let maxFreq = -Infinity
    let val = arr[0]

    map.forEach((frqu , key) => {

        if(frqu > maxFreq)
        {
            maxFreq = frqu
            val = key
        }
        else if(freq  == maxFreq)
        {
            val = Math.max(val , key)
        }
    })
    return val
}

//TC --> O(N)
//Sc --> O(1)

//An efficient solution to this problem can be to solve this problem by Moore’s voting Algorithm.


function mostFrequent1(arr)
{
   let num1 = -1;
   let num2 = -1;
   let cnt1 = 0;
   let cnt2 = 0;

   let i = 0;

   while(i<arr.length)
   {
       if(arr[i] == num1)
       {
           cnt1++
       }
       else if(arr[i] == num2)
       {
           cnt2++
       }
       else if(cnt1 == 0)
       {
          num1 = arr[i]
          cnt1 = 1
       }
       else if(cnt1 == 0)
       {
          num2 = arr[i]
          cnt2 = 1
       }
       else
       {
           cnt1--
           cnt2--
       }
   } 
   
   cnt1 = 0
   cnt2 = 0

   for(let i = 0 ; i<arr.length ; i++)
   {
       if(arr[i] == num1)
       {
        cnt1++
       }
       else if (arr[i] == num2)
       {
        cnt2++
       }
   }

   if(cnt1 > cnt2) return num1
   else if (cnt2 > cnt1) return num2
   else if (cnt1 == cnt2)
   {
      if(num1 > num2) return num1
      else return num2
   }
}