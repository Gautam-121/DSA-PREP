/*


Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true
 

Constraints:

1 <= arr.length <= 1000
-1000 <= arr[i] <= 1000

*/


// function uniqueOccurance(arr) {

//     let obj = {}

//     for (let i = 0; i < arr.length; i++) {
//         if (obj[arr[i]]) {
//             obj[arr[i]] = obj[arr[i]] + 1
//         } else {
//             obj[arr[i]] = 1
//         }
//     }

//     let arr1 = []

//     for (let keys in obj) {
//         arr1.push(obj[keys])
//     }
//     console.log(arr1)
//     for (let k = 0; k < arr1.length - 1; k++) {
//         for (let j = k + 1; j < arr1.length; j++) {
//             if (arr1[k] == arr1[j]) {
//                 return false
//             }
//         }
//     }

//     return true
// }

// console.log(uniqueOccurance([1, 2, 2, 1, 1, 3]))

// Tc --> O(N)  , Sc --> O(N)


function uniqueOccurance(arr){

    let map = new Map()
    let set = new Set()

    for(let val of arr)
    {
        if(map.has(val))
        {
            map.set(val , (map.get(val) || 0) + 1)
            set.add(map.get(val))
        }
        else
        {
            map.set(val , 1)
            set.add(map.get(val))
        }
    }

    return map.size == set.size
}


function uniqueOccurance1(arr) {

    let map = new Map()

    for(let  i =0 ; i<arr.length ; i++)  // store frequency of each element in MAP
    {
        map.set(arr[i] , (map.get(arr[i]) || 0) + 1)
    }

    let set = new Set()
    
// Store-->calculated total frequency of each element in map  stored in set , set remove duplicate number

    for(let pair of map)
    {
        set.add(pair[1])
    }

    return (map.size == set.size) // check size of map and set , if this size same return true 
 
} 

console.log(uniqueOccurance1([1, 2, 2, 1, 1, 3]))








/*

You are given an array A of N integers. You can perform the below operation on the array at most once :

Choose two integers 1<=i,j<=N.
Choose two positive integers X and Y and assign Ai = X and Aj = Y, 
such that the product of all the elements of the array remains the same before and after the operation.
You need to perform the operation such that after the operation the sum of the elements of array A is minimized. 
You just need to print the minimum possible sum of the array after the operation.

Input Format
First line contains a single integer denoting N.
The next line contains N space-separated integers denoting the elements of array A.

Output Format
Print the minimum possible sum of the array after the operation.
Constraints

2<=N<=104
1<=Ai<=200
Sample Input 1

5

5 3 1 2 4

Sample Output 1

14

Explanation of Sample 1

Select i = 3, j=4, X = 2, Y = 2.

After the operation Array A becomes = [5 3 2 2 2].

Product of elements of array before operation = 5*3*1*2*4 = 120

Product of elements of array after operation = 5*3*2*2*2 = 120

Sum of elements after operation= 5+3+2+2+2 = 14.


function operationProduct(arr, n)
{
  //write a code in javascript programming language

*/




//  5 3 1 2 4


function productSame(arr){

    let product = 1
    let sumArray = 0;

    for(let val of arr){
        sumArray+=val
        product*=val
    }

    let x = 1
    let y = 1;

     while(true){

        for(let i = 1 ; i<arr.length-1 ; i++){

            let productVal = (product/arr[i]) * x

            for(let j = i+1 ; j<arr.length ; j++){

                let value = (productVal/arr[j]) * y

                if(product == value) {

                    let sum = arr[i] + arr[j]

                    if(sum > (x+y)){
                        return (sumArray - (sum - (x+y)))
                    }
                }
            }
            x++
            y++
        }
     }
}

let ans = productSame([5,3,1,2,4])

console.log(ans)

