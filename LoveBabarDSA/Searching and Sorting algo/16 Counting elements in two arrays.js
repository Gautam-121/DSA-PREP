
/*

Given two unsorted arrays arr1[] and arr2[]. They may contain duplicates.
 For each element in arr1[] count elements less than or equal to it in array arr2[].

Example 1:

function remove(arr1 , arr2){

    arr2.sort((a,b)=> a-b)

    let i = 0;
    let j = 0;
    let count = 0;
    let ans = []

    while(i<arr1.length && j<arr2.length){

        if(arr[i] <= arr[j]){
            count++
            j++
        }
        else
        {
            ans.push(count)
            i++
        }
    }

    while(i<arr1.length){
        ans.push(count)
        i++
    }
}

Input:
m = 6, n = 6
arr1[] = {1,2,3,4,7,9}
arr2[] = {0,1,2,1,1,4} // 0 1 1 1 2 4
Output: 4 5 5 6 6 6
Explanation: Number of elements less than
or equal to 1, 2, 3, 4, 7, and 9 in the
second array are respectively 4,5,5,6,6,6
Example 2:


function binarySerch(arr , target)
{
    let start = 0;
    let end = arr.length - 1

    let mid;
    let ans = -1

    while(start<=end)
    {
        mid = Math.floor(start + ( end - start)/2)

        if(arr[mid] <= target)
        {
            ans = mid
            start =  mid + 1
        }
        else
        {
            end = mid - 1
        }
    }
}

function check(arr , arr) 
{
    arr2.sort((a,b) => a - b)
    let ans = []

    for(let i = 0 ; i<arr1.length ; i++)
    {
        count = binarySerch(arr2 , target)
        
        ans.push(count+1)
    }
    return ans
}

Input:
m = 5, n = 7
arr1[] = {4,8,7,5,1}
arr2[] = {4,48,3,0,1,1,5}
Output: 5 6 6 6 3
Explanation: Number of elements less than
or equal to 4, 8, 7, 5, and 1 in the
second array are respectively 5,6,6,6,3
Your Task :
Complete the function countEleLessThanOrEqual() that takes two array arr1[], arr2[],  m, and n as input and returns an array containing the required results(the count of elements less than or equal to it in arr2 for each element in arr1 where ith output represents the count for ith element in arr1.)

Expected Time Complexity: O((m + n) * log n).
Expected Auxiliary Space: O(m).

*/

// Brute Force --> Tc --> O(N^2) , Sc --> O(1)

function countEleLessThanOrEqual(arr1, arr2, m, n) {
    //code here

    for(let  i = 0 ; i<arr1.length ; i++) {

        let count = 0

        for(let  j =0 ; j<arr2.length ; j++) {

            if(arr1[i] >= arr2[j]) {
                count++
            }
        }
        arr1[i] = count
    }
    return arr1
}

console.log(countEleLessThanOrEqual([4,8,7,5,1] , [4,48,3,0,1,1,5]))



// Tc --> O(nlogn + mlogn) ==> (n+m)logn

function countEleLessThanOrEqual1(arr1, arr2, m, n) {
    //code here

    arr2.sort((a, b) => a - b)

    function binarySearch(arr, n, target) {

        // To find count of element <= key
        let st = 0;
        let en = n - 1

        let mid;
        let ans = 0

        while (st <= en) {

            mid = Math.floor(st + (en - st) / 2)

            if (arr[mid] <= target) {

                ans += (mid - st + 1)
                st = mid + 1
            }
            else {
                en = mid - 1
            }
        }
        return ans
    }

    for (let i = 0; i < m; i++) {

        let key = arr1[i]
        let count = binarySearch(arr2, n, key)
        arr1[i] = count

    }
    return arr1
}

console.log(countEleLessThanOrEqual1([4,8,7,5,1] , [4,48,3,0,1,1,5] ,5,7))



// function countEleLessThanOrEqual2(arr1, arr2, m, n) {
//     //code here

//     let max1 = 0;
//     let max2 = 0;

//     for(let i = 0 ; i<m ; i++) {
        
//         max1 = Math.max(arr1[i] , max1)
//     }

//     for(let i = 0 ; i<m ; i++) {
        
//         max2 = Math.max(arr2[i] , max2)
//     }

//     let fArray = new Array(max2+1) // frequency of all element in arr2

//     fArray.fill(0)  // Initially fill Zero

//     console.log(fArray)

//     for(let i = 0 ; i<n ; i++) {
        
//         fArray[arr2[i]]+=1 // Increase value of frequency of each element
//     }

//     let OverMax = Math.max(max1 ,max2)

//     let prefixSum = new Array(OverMax+1)

//     for(let i = 0 ;  )

// }


// console.log(countEleLessThanOrEqual2([4,8,7,5,1] , [4,9,3,0,1,1,5] ,5,7))




function remove(arr1 , arr2){

    arr2.sort((a,b)=> a-b)

    let i = 0;
    let j = 0;
    let count = 0;
    let ans = []

    while(i<arr1.length && j<arr2.length){

        if(arr[i] <= arr[j]){
            count++
            j++
        }
        else
        {
            ans.push(count)
            i++
        }
    }

    while(i<arr1.length){
        ans.push(count)
        i++
    }

    return ans
}