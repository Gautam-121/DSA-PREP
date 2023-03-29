/// same code of count subaarays with sum is equal to k

/*

Given an array arr of N integers and an integer K, find the number of subsets of arr having XOR of elements as K.
 

Example 1:

function subset(arr){

    let map = new Map()

    let xor = 0;

    map.set(xor , -1)

    for(let i = 0 ; i<arr.length ; i++){


        sym^=arr[i]
        let find = sum ^ k

        if(map.has(find)){

            let lengt = i - map.get(find)

            maxWindow = Math.max(length , maxWindow)
        }

        if(!map.has(xor)) map.set(xor , i)
    }
    
}

Input:
N = 4
k = 6
arr: 6 9 4 2
Output:
2
Explanation:
The subsets are 
{4,2} and {6}
Example 2:

Input:
N = 5
K = 4
arr: 1 2 3 4 5
Output:
4
Explanation:
The subsets are {1, 5},
{4}, {1, 2, 3, 4},
and {2, 3, 5}

Your Task:
You don't need to read input or print anything. Your task is to complete the function subsetXOR() which takes the array arr[], its size N, and an integer K as input parameters and returns the number of subsets having xor as K
 
*/


function cntSubXor(arr , k)
{
    let map = new Map()
    let ans = 0
    
    let xor = 0 // Initial upto start xor 0
    map.set( xor , 1) 

    for(let i = 0 ; i<arr.length ; i++)
    {
        xor = xor^arr[i]  // Xor value at ith point
        let serchVal = xor^k // xor^k find in array

        if(map.has(serchVal)) // if fount
        {
            ans+=map.get(serchVal) // ans+=frequency of that xor element
        }
        
        map.set(xor , (map.get(xor) || 0) + 1) // set in map xor value uoto that ith pointer
    }
   
    return ans // return ans
}

console.log(cntSubXor([5, 6, 7, 8, 9] , 5))

console.log(2^6)