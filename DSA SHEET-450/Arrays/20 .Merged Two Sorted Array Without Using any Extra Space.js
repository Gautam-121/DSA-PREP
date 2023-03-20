/*

Given two sorted arrays arr1[] and arr2[] of sizes n and m in non-decreasing order.
 Merge them in sorted order without using any extra space. 
 Modify arr1 so that it contains the first N elements and modify arr2 so that it contains the last M elements.
 

Example 1:

Input: 
n = 4, arr1[] = [1 3 2 0]  // [0 1 2 3 ] 
m = 5, arr2[] = [7 5 6 8 9] // [5 6 7 8 9]
Output: 
arr1[] = [0 1 2 3]
arr2[] = [5 6 7 8 9]
Explanation:
After merging the two 
non-decreasing arrays, we get, 
0 1 2 3 5 6 7 8 9.
Example 2:

Input: 
n = 2, arr1[] = [10, 12] 
m = 3, arr2[] = [5 18 20]
Output: 
arr1[] = [5 10]
arr2[] = [12 18 20]
Explanation:
After merging two sorted arrays 
we get 5 10 12 18 20.

Your Task:
You don't need to read input or print anything. You only need to complete the function merge() that takes arr1, arr2, n and m as input parameters and modifies them in-place so that they look like the sorted merged array when concatenated.
 

Expected Time Complexity:  O((n+m) log(n+m))
Expected Auxilliary Space: O(1)

*/

// Tc --> (NlogN)
// sc --> (N+M)  

/*

First Method --->   take another arr3 = []

   step-1  --> stored all arr1 value in arr3
   step-2 ---> stored all arr2 value in arr3;

   step-3 ---> sort arr3

   stored all value upto size arr1 in arr3 ; then
   stored remaining value in arr2 in arr3

*/

function mergeTwoSortedArray(arr1 , arr2) {

    let arr3 = []

    for(let  i = 0 ; i<arr1.length ; i++) {  // O(N)

        arr3.push(arr1[i])
    }

    for(let  j = 0 ; j<arr2.length ; j++) {  // O(M)

        arr3.push(arr2[j])
    }

    arr3.sort((a,b) => a-b)  //(NlogN)

    let k = 0;

    for(; k<arr1.length ; k++) {  //

        arr1[k] = arr3[k]

    }

    for(let j = 0 ; j<arr2.length ; j++) {

        arr2[j] = arr3[k]

        k++

    }



    console.log(arr1 ,arr2 , arr3)
}


mergeTwoSortedArray([1 ,3 , 5 , 7] , [0 , 2 , 6 , 8 , 9])



/*

iterate on first array all all he element ;

in array one we stored all value that apper first then remaining we stored in arry two;

check arr1[i] if greater than arr2[0] then swap ;

after swapping sort arr2;

then  check for next iteraion;

[1 , 4 , 7 , 8 , 10]

[2 , 3 , 9]

for i = 0;

if(arr1[0]   > arr2[0])  --> (1 > 2) No

for i = 1

if(arr1[1]   > arr2[0])  -->  (4 > 2) Yes , swap(a1[i] ,a2[0])

[1 , 2 , 7 , 8 , 10]

[4 ,3 , 9] ---> sort --> [3 , 4 , 9]

for i = 2

if(arr1[2]   > arr2[0])  -->  (7 > 4) Yes , swap(a1[i] ,a2[0])

[1 , 2 , 4 , 8 , 10]

[7 ,3 , 9] ---> sort --> [3 , 7 , 9]

for i = 3

if(arr1[3]   > arr2[0])  -->  (8 > 3) Yes , swap(a1[i] ,a2[0])

[1 , 2 , 4 , 3 , 10]

[8 , 7 , 9] ---> sort --> [3 , 7 , 9]


*/

//Tc --> O(n * mLogM)
// Sc ---> O(1)

function mergeTwoSortedArray2(arr1 , arr2) {
     

    for(let  i =0 ; i<arr1.length ; i++) {

        if(arr1[i] > arr2[0]) {

            [arr1[i] ,arr2[0]] = [arr2[0] ,arr1[i]]

            arr2.sort((a,b) => a-b)
        }
    }

    console.log(arr1 , arr2)
    
}


mergeTwoSortedArray2([1 ,3 , 5 , 7] , [0 , 2 , 6 , 8 , 9])


// Tc ---> O(NlogN)
// sc ---> O(1)

/*

use two pointer apporch ;

i = arr1.length - 1; point arr1
j = 0               ; point arr2

in arr1 , arr2 arrenged in ascending order

*/

function mergeTwoSortedArray3(arr1 , arr2) {
     
      let i = arr1.length - 1;
      let j = 0;

      while(i>=0 && j<arr2.length) {

        if(arr1[i] > arr2[j]) {

            [arr1[i] , arr2[j]] =  [arr2[j] , arr1[i]]
        }else{

            break;
        }
        
        i--
        j++

      }

      arr1.sort((a,b) => a-b)
      arr2.sort((a,b) => a-b)

      console.log(arr1 , arr2)
}

mergeTwoSortedArray3([1 ,3 , 5 , 7] , [0 , 2 , 6 , 8 , 9])

