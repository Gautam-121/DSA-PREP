/*

Given an array of integers arr, return true if the number of occurrences of each value in the array is unique or false otherwise.

 

Example 1:

Input: arr = [1,2,2,1,1,3]
Output: true
Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.
Example 2:

function unique(arr){

    let map = new Map()
    let set = new Set()

    for(let val of arr){

        if(map.has(val)){

            map.set(val , map.get(val) + 1)
            set.add(map.get(val))
        }
        else
        {
            map.set(val , 1)
            set.add(1)
        }
    }

    return map.size == set.size()
}

Input: arr = [1,2]
Output: false
Example 3:

Input: arr = [-3,0,1,-3,1,1,1,-3,10,0]
Output: true

*/

// tc --> o(n)
// sc --> o(n)

// find more optimise approch

function uniqueOccurance(arr)
{
    let map = new Map()

    for(let i = 0 ; i<arr.length ; i++)
    {
        map.set( arr[i] , (map.get(arr[i]) || 0) + 1)
    }

    let set = new Set

    map.forEach((value , key) => {

        if(set.has(value))
        {
            return false
        }

        set.add(value)
    }) 

    return true
}