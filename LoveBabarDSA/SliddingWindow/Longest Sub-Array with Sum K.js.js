// Brute force Tc --> O(N^2)

/*
Run a nested loop . 
Outer loop will contain variable i from 0 to n-1.
Second loop will contains variable j from i to n-1.
Run a third loop from i to j and find the sum . If sum is K , then update answer , ans = max ( ans, j-i+1).
*/


/*
Given an array arr[] of size n containing integers. The problem is to find the length of the longest sub-array having sum equal to the given value k.

Examples: 

Input: arr[] = { 10, 5, 2, 7, 1, 9 }, k = 15
Output: 4
Explanation: The sub-array is {5, 2, 7, 1}.

Input: arr[] = {-5, 8, -14, 2, 4, 12}, k = -5
Output: 5

*/

// approch -  Brute force  O(N^2)

function longest(arr)
{
    let max = 0

    for(let i = 0 ; i<arr.length ; i++)
    {
        let sum  = 0

        for(let j = i ; j<arr.length ; j++)
        {
            sum+=arr[j]

            if(sum == k)
            {
                max = Math.max( max , (j-i+1))
            }
        }
    }
   return max
}

// approch - 2  --> 
// Only For positive Number

function maxWindow( arr , k)
 {
    let i = 0;
    let j = 0;
    let max = -Infinity

    let sum = 0

    while(j<arr.length)
    {
        sum+=arr[j]

        if(sum < k)
           j++

        else if(sum == k)
        {
            max = Math.max(max , (j-i+1)) 
            j++           
        }

        else
        {
            while(sum > k)
            {
                sum-=arr[i]
                i++
            }

            max = Math.max( max , (j-i+1))

            j++
        }
    }
  return max
 }

 console.log(maxWindow([1,2,3,4,5,1,7,8,9,10], 10 ,13))

// All positive and negative number  Use Prefix sum method 

// Find longest subArray store (key -> sum upth ith Index , value --> Stored index of array upto sum)

function longestSubArray(arr , k)
{
    let map = new Map()
    let sum = 0
    map.set(sum , -1) // store sum as key ,  index as value 

    for(let i = 0 ; i<arr.length ; i++)
    {
        sum+=arr[i]  // sum of upto ith
        let search = sum - k;  // serch sum-k present in map
 
        if(map.has(search))
        {
            let maxWindow =  (i - (map.get(search))) // maxWindo , currentIndex - search of index
            max = Math.max( max , maxWindow) // check this windw is maximum
        }

        if(!map.has(sum)) map.set( sum ,  i) // I want max Size subArray , that why not update index
    }
    return max
}

console.log(longestArray([]))

//Find count of all SubArray whose sum is k --> (key --> stored sum upto ith Index , value --> frequency of that sum)
function subarraySum1(arr , target) {

    let map = new Map()
    let ans = 0
    let sum = 0

    map.set(0 , 1)  // initially 0 has frequency 1

    for(let i=0 ;i<arr.length ; i++) {

        sum+=arr[i] // sum of upto ith
        let search = sum- target // serch sum-k present in map
         
        if(map.has( search )) {

            ans+=map.get( sum - target)  // in ans+= add all the frequency of suearch
        }

        map.set( sum , (map.get( sum ) || 0) + 1) // if sum already present increase their frequency , if not then add sum and stored 1 as their value
    }
    return ans
}0

console.log(subarraySum1([3,9,-2,4,1,-7,2,6,-5,8,-3,-7,2,1], 5))









 