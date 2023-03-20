/*

Given two arrays a[] and b[] respectively of size n and m, the task is to print the count of elements in the intersection (or common elements) of the two arrays.

For this question, the intersection of two arrays can be defined as the set containing distinct common elements between the two arrays. 

Example 1:

Input:
n = 5, m = 3
a[] = {89, 89,89,24, 75, 11, 23}  --> [89 , 89]
b[] = {89, 2, 4 ,89}

Output: 1

Explanation: 
89 is the only element 
in the intersection of two arrays.
Example 2:

Input:
n = 6, m = 5
a[] = {1, 2, 3, 4, 5, 6}
b[] = {3, 4, 5, 6, 7} 

Output: 4

Explanation: 
3 4 5 and 6 are the elements 
in the intersection of two arrays.
Your Task:
You don't need to read input or print anything. Your task is to complete the function NumberofElementsInIntersection() which takes two integers n and m and their respective arrays a[] and b[]  as input. The function should return the count of the number of elements in the intersection.

 

Expected Time Complexity: O(n + m).
Expected Auxiliary Space: O(min(n,m)).

*/

/*
 if say all distinct according to the GeegsForGeegs 

 use set data structure --> add all vaulue of one array and then check array2 contain this value
 or not , if it contain -->  increase count++ and delete the element from set

*/

function NumberofElementsInIntersection(a, b, n, m) {

    // using set to store the elements.
    let s1 = new Set();
    let count = 0;

    // we insert all the elements of first array in set s1.
    for (let i = 0; i < n; i++) s1.add(a[i]);

    // iterating over the second array.
    for (let i = 0; i < m; i++) {
        // if current element already exists in set, we update the counter.
        if (s1.has(b[i])) {

            // erasing element from set because if same element is present
            // again in the array we don't need to count it again.
            s1.delete(b[i]);

            // incrementing the counter.
            count++;
        }
    }
    // returning the counter.
    return count;
}



/*


if  according to the me it mapping present then it is intersection 

 use map data structure --> add all vaulue of one array and then check array2 contain this value
 or not , if it contain -->  increase count++ and  decrease frequency from map and check map[a[i]] == 0 
 then delete map.delete()

 [2 2 2 ]
 [ 2 2 ] [2 , 2 ]

*/




function NumberofElementsInIntersection(a, b, n, m) {
    // code here
    
    
    let map = new Map()  // store array one element in map frquency of all element
    let count = 0
    
    for(let  i = 0 ; i<n ; i++) {
        map.set(a[i] , (map.get(a[i]) || 0) + 1)
    }
    
    for(let j=0 ; j<m ; j++) {
        
        if(map.has(b[j])) { // check array element present if present count++
            
            count++
            
            map.set(b[j] , map.get(b[j]) -1) // decrease frequency of element by 1
            
            if(map.get(b[j]) == 0) { // check if frequency is zero remove from map
                map.delete(b[j])
            }
        }
    }
    return count
}










function uniq(arr1 ,arr2) {

    let i = 0;
    let j = 0;

    let arr3 = []

    while(i<arr1.length && j<arr2.length) {

        if(arr1[i] < arr2[j]) {

            arr3.push(arr1[i])

            while(i<arr1.length && arr1[i] == arr1[i+1]) {
                i++
            }
            i++
        }
        else if(arr1[i] > arr2[j]) {

            arr3.push(arr2[j])

            while(j<arr2.length&& arr2[j] == arr2[j+1]) {
                j++
            }
            j++
        }
        else{

            arr3.push(arr2[j])

            while(i<arr1.length && arr1[i] == arr1[i+1]) {
                i++
            }
            while(j<arr2.length && arr2[j] == arr2[j+1]) {
                j++
            }            
            i++
            j++
        }

    }

    while(i<arr1.length) {
        arr3.push(arr1[i])

        while(i<arr1.length && arr1[i] == arr1[i+1]) {
            i++
        }
        i++
    }
    while(j<arr2.length) {
        arr3.push(arr2[j])

        while(j<arr2.length && arr1[j] == arr2[j+1]) {
             j++
        }
        j++
    }

    return arr3
}

console.log(uniq([1,2,2,3,3,4,4,5,7,90,41],[3,4,4,5,5,6,7,8,74,85,45,12])) //[1,2,3,4,5,6,7,8,74,85,45,12,90,14]
