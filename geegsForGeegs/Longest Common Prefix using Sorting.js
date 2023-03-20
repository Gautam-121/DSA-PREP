/*

Given a array of N strings, find the longest common prefix among all strings present in the array.


Example 1:

Input:
N = 4  "gee"  tempStr  = arr[0]

let preStrLength = Infinity
let ansPreStr = ""

for(let  i = 1 ; i<str.length ; i++) {

    if(tempStr[0] !== str[i][0]) return ""

    let currentStr = str[i]

    let newSre = ""

    for(let  i = 0 ; i <currentStr.length ; i++) {

        if(tempStr[i] == currentStr[i]) {

            newStr+=tempStr[i]
        }
        else{
            break;
        }
    }

    if(newStr.length < currentStrLength) {
         
        ansPreStr = nweStr
        preStrLength = newStr.length
    }
}

arr[] = {geeks, geeksforgeeks , geek,
         geezer}
Output: gee
Explanation: "gee" is the longest common
prefix in all the given strings.
Example 2:

Input: 
N = 2
arr[] = {hello, world}
Output: -1
Explanation: There's no common prefix
in the given strings.

Your Task:
You don't need to read input or print anything. Your task is to complete the function longestCommonPrefix() which takes the string array arr[] and its size N as inputs and returns the longest common prefix common in all the strings in the array. If there's no prefix common in all the strings, return "-1".


Expected Time Complexity: O(N*max(|arri|)).
Expected Auxiliary Space: O(max(|arri|)) for result.


Constraints:
1 ≤ N ≤ 103
1 ≤ |arri| ≤ 103

*/


function prefix(arr) {

    let prevStr = arr[0];

    let preStrLength = Infinity

    let ansPreStr = ""

    for(let i = 1 ; i<arr.length ; i++) {
           
        let currentStr = arr[i];

        if(prevStr[0] !== currentStr[0]) return ""

        let newStr =  ""

        for(let j = 0; j< currentStr.length ; j++) {

            if(prevStr[j] == currentStr[j]) {
              
                newStr+=prevStr[j]
            }
            else if(prevStr[j] !== currentStr[j] || (prevStr.length-1 == j) ) {
                break;
            }
        }

        if(newStr.length<preStrLength) {
             
            ansPreStr = newStr
            preStrLength = newStr.length
        }
    }
    return ansPreStr
}

console.log(prefix(["apple", "ape", "april"]))  // ["ape" , "apple" , "april"]


// after Sorting check the first and last index prefix

// Tc --> O(nlogn)
// sc  --> O(max(arr[0] ,arr[arr.length-1]))


function prefix1(arr) {

    arr.sort() // nlogn , in javascript it sort the string on the basis of lexicografic way

    let fisrt = arr[0]
    let last = arr[arr.length-1]

    let newStr = ""

    let i = 0;
    let j = 0;

    while(i<fisrt.length && j<last.length) {
        
        if(fisrt[i] !== last[j]) {
            break
        }
        else{

            newStr+=fisrt[i]
            i++
            j++
        }
    }
    return newStr
}


console.log(prefix1(["apple", "ape", "april"]))