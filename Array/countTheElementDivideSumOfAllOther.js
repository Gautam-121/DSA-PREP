// Count array elements that divide sum of all other elements
// Given an array of integers, find the number of elements in the array, which divide the sum of all other elements.

// Input:

//     5
//     3 10 4 6 7

//     where:
// First line represents the number of elements in the array.
// Second line represents the elements in the array.

 

// Output:
//     3

// Explanation:  3 divides 27 (10 + 4 + 6 + 7)
//               10 divides 20 (3 + 4 + 6 + 7)
//               6 divides 24 (3 + 10 + 4 + 7), as there are only 3 such numbers the output is 3.

 
function countElementDivideSum(arr){
    let sum = 0;

    for(let val of arr)  sum+=val
    
    let count = 0

    for(let val of arr)
    {
        if((sum-val)%val == 0) count++
    }

    return count
}


console.log(countElementDivideSum([1,2,3,4,5,6,7,8,9,10]))


