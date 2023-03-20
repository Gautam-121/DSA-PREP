/*

Given an unsorted array A[]. The task is to print all unique pairs in the unsorted array with equal sum.

Note: Print the result in the format as shown in the below examples. 

Examples: 

Input: A[] = { 6, 4, 12, 10, 22, 54, 32, 42, 21, 11}
Output:
Pairs : ( 4, 12) ( 6, 10)  have sum : 16
Pairs : ( 10, 22) ( 21, 11)  have sum : 32
Pairs : ( 12, 21) ( 22, 11)  have sum : 33
Pairs : ( 22, 21) ( 32, 11)  have sum : 43
Pairs : ( 32, 21) ( 42, 11)  have sum : 53
Pairs : ( 12, 42) ( 22, 32)  have sum : 54
Pairs : ( 10, 54) ( 22, 42)  have sum : 64

*/


// make map add stored all sum that equal sum 
/*

map : --->  {

    10 : [ (6,4) , ]
    18 : [(6,12) ,]
    16 : [(6 , 10) , (4,12)]
    28 : [(6,22) , ]
    60 : [(6 , 54)]
    38 : [(6,32)]
    48 : [(6,42)]
    27 : [(6,21)]
    17 : [(11,6)]
}

continue
*/


function allpairEqualSum(arr) {

    let map = new Map()

    for(let  i =0 ; i<arr.length - 1 ; i++) {

        for(let j = i+1 ; j<arr.length ; j++) {

            if(map.has(arr[i] + arr[j])) {

                map.set((arr[i] + arr[j]) , addPair(arr[i] , arr[j]))
            }
        }
    }

    // iterate map and print all pair have equal sum
}