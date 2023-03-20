/*
Given two arrays: a1[0..n-1] of size n and a2[0..m-1] of size m. 
Task is to check whether a2[] is a subset of a1[] or not. Both the arrays can be sorted or unsorted. 
 

Example 1:

Input:
a1[] = {11, 1, 13, 21, 3, 7} // 1 , 3 , 7 , 11 , 13 , 21
a2[] = {11, 3, 7, 1} // 1 , 3 ,7 ,11
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 2:

Input:
a1[] = {1, 2, 3, 4, 5, 6}
a2[] = {-1 , 0 , 1 , 2}
Output:
Yes
Explanation:
a2[] is a subset of a1[]

Example 3:

Input:
a1[] = {10, 5, 2, 23, 19}
a2[] = {19, 5, 3}
Output:
No
Explanation:
a2[] is not a subset of a1[]
 

Your Task:  
You don't need to read input or print anything. Your task is to complete the function isSubset() which takes the array a1[], a2[], its size n and m as inputs and return "Yes" if arr2 is subset of arr1 else return "No" if arr2 is not subset of arr1.

 

Expected Time Complexity: O(n)
Expected Auxiliary Space: O(n)

*/


// Brute Force --> Tc --> O(N^2) , Sc --> O(1)

function subSet(arr1 , arr2)
{
    for(let i = 0 ; i<arr2.length ; i++)
    {
        let val = arr2[i]
        let isFind = true

        for(let i = 0 ; i<arr1.length ; i++)
        {
            if(val == arr1[i])
            {
               arr1[i] = -1
               isFind = false 
               break
            }
        }

        if(isFind) return "No"
    }

    return "Yes"
}

// Approch-2 --> Tc --> O(nlogn + mlogm) , Sc --> O(1)
// (sort Array + Two pointer)

function subSet1(arr1 , arr2)
{
    arr1.sort((a,b) => a-b)
    arr2.sort((a,b) => a-b)

    let i = 0;
    let j = 0;

    while(i<arr1.length)
    {
        if(arr1[i] == arr2[j])
        {
            i++
            j++

            if(j == arr2.length) return "Yes"
        }
        else if( arr1[i] < arr2[j])
        {
            i++
        }
        else
        {
            return "No"
        }
    }
}


// optimal Approch --> Tc --> O(n) , sc --> O(n)

function subSet2(arr1 , arr2)
{
    let map = new Map()

    for(let i = 0 ; i<arr1.length ; i++)
    {
        map.set( arr1[i] ,  (map.get(arr1[i]) || 0) + 1)
    }

    for(let i=0 ; i<arr2.length ; i++)
    {
        if(map.has(arr2[i]))
        {
            map.set(arr2[i] , map.get(arr2[i]) - 1)

            map.delete(arr2[i])
        }
        else{
            return " No"
        }
    }

    return "Yes"
}