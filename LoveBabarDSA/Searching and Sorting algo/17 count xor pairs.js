/*
Given an array A[] of size N. Find the number of pairs (i, j) such that
Ai XOR Aj = 0, and 1 ≤ i < j ≤ N.

Example 1:

â€‹Input : arr[ ] = {1, 3, 4, 1, 4}
Output : 2
Explanation:
Index( 0, 3 ) and (2 , 4 ) are only pairs 
whose xors is zero so count is 2.

â€‹Example 2:

Input : arr[ ] = {2, 2, 2} 
Output :  3

 

Your Task:
This is a function problem. The input is already taken care of by the driver code. You only need to complete the function calculate() that takes an array (arr), sizeOfArray (n), and return the count of Zeros Xor's Pairs. The driver code takes care of the printing.

Expected Time Complexity: O(N*Log(N)).
Expected Auxiliary Space: O(1).

*/

// Brute force :=>  Tc --> O(n^2) , sc --> O(1)


/*

create hashMap store frequency of each element , 

after transverse the frequency map , if(value>=2)  count +=(value-1)*(value-1 + 1)/2

that means , total number of xor pair is sum of all number 1 to value-1

ele = 1 , count = 5

 1 1 1 1 1 ==> total xor pair --> 0-Index -> (1,1),(1,1),(1,1),(1,1) --> 4 , 1-Index -> (1,1),(1,1),(1,1)--> 3
 
 2-Index -> (1,1),(1,1) --> 2

 3-Imdex -> (1,1) -> 1

 4 + 3 + 2 + 1  => 10

*/

function calculate(arr, n) {
    //code here
    
    let count = 0
    
    for(let  i = 0 ; i<n-1 ; i++) {
        
        for(let j = i+1 ; j<n ; j++) {
            
            if(arr[i] == arr[j]) {
                count++
            }
        }
    }
    return count
}


// Tc --> O(n) , sc --> O(n)

function calculate1(arr, n) {
    //code here
    
    let map = new Map()
    
    for(let  i = 0 ; i<n ; i++) {
        
        map.set(arr[i] ,( map.get(arr[i]) || 0) + 1)
    }
    
    let count = 0

    map.forEach((value , key)=> {
        
        if(value >= 2) {
            
            let m = value-1;
            
            let total = m*(m+1)/2
            
            count+=total
        }
    })
    
    return count
}

console.log(calculate1([1, 3, 4, 1, 4],5))

function calculate2(arr, n) {
    //code here
    let map = new Map()
    let count = 0

    for(let i = 0 ; i<arr.length ; i++)
    {
        if(map.has(arr[i]))
        {
            count+=map.get(arr[i])
        }

        map.set(arr[i] , (map.get(arr[i]) || 0) + 1)
    }
    return count
}

console.log(calculate2([1,1,1,1,1]))

