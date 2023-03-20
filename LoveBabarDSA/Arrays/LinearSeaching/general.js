

function leapYear(num) {
    
    for( let i=1 ;i<=10 ;i++) {
      console.log(num*i)
    }
}

leapYear(5)

function lcmHcf(a,b) {
    
    
}

leapYear(5)


function currecyConvrt( rupee ) {

    let USdD = rupee/81.968

    return USdD

}

console.log(currecyConvrt(100))


function fibbonacci(n) {

    let a = 0 ;
    let b = 1;

    let sum = 0

    for(let i = 1 ; i<=n-2; i++) {

        sum  = a + b ;

        a = b;
        b = sum ;
       
    }

    return sum
}

console.log(fibbonacci(10))


var a = [1,2,3]

a[10] = 100;

console.log(a[6])


// function repeateString(str) {

//     let map = new Map()

//     for(let i=0 ; i<str.length ; i++) {
//         map.set(str[i] , (map.get(str[i])||0) + 1)
//     }

//     let max  = -Infinity;
//     let ans;

//     map.forEach((value,key) => {

//         if(value>1) {
            
//             rPeate.push(key)
//         }
//     })
    
//     return rPeate
// }

// // a--> 5 , b --> 6 , c---> 12

// console.log(repeateString("aaaaabbbbbbcccccccccccccccccccccccccccccccccccccccccccccccc"))


function mostFrequentElement(str) {

    
}

// a--> 5 , b --> 6 , c---> 12


/*

17. How to find the smallest positive integer value that cannot be represented as sum of any subset of a given array? (solution)
This is another tough array question you will see on Amazon, Microsoft or Google. You have given a sorted array (sorted in non-decreasing order) of positive numbers, find the smallest positive integer value that cannot be represented as sum of elements of any subset of given set. What makes it more challenging is expected time complexity of O(n).

Examples:

Input: {1, 3, 6, 10, 11, 15};
Output: 2


Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-inte0rview-questions-and-answers.html#ixzz7mgBYpj1Y

18. How to rearrange array in alternating positive and negative number? (solution)
Given an array of positive and negative numbers, arrange them in an alternate fashion such that every positive number is followed by negative and vice-versa maintaining the order of appearance.
Number of positive and negative numbers need not be equal. If there are more positive numbers they appear at the end of the array. If there are more negative numbers, they too appear in the end of the array. This is also a difficult array problem to solve and you need lot of practice to solve this kind of problems in real interviews, especially when you see it first time. If you have time constraint then always attempt these kind of questions once you are done with easier ones. 

Example:

Input: {1, 2, 3, -4, -1, 4}
Output: {-4, 1, -1, 2, 3, 4}

Input: {-5, -2, 5, 2, 4, 7, 1, 8, 0, -8}
output: {-5, 5, -2, 2, -8, 4, 7, 1, 8, 0} 


Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgBwL4Gh

20. How to remove duplicates from array in place? (solution)
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array A = [1,1,2],

Your function should return length = 2, and A is now [1,2]. 

When you see a questions which asked you do to sorting or task in place, it means you cannot use additional array or buffer, but using couple of variables is fine.


Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgCrONDa


21. How to remove a given element from array in Java? (solution)
This is another array coding questions similar to previous one. Here you don't have to find and remove duplicates but a given number. In this problem you are given an array and a value, remove all instances of that value in place and return the new length. The order of elements can be changed. It doesn't matter what you leave beyond the new length. 


Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgDAeL5a

24. How to find sub array with largest product in array of both positive and negative number? (solution) 
In this problem, your task is to write a program in Java or C++ to find the contiguous sub-array within an array (containing at least one number) which has the largest product.

For example, given the array [2,3,-2,4],
the contiguous subarray [2,3] has the largest product = 6. 


Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgDfLaqD

25. Write a program to find length of longest consecutive sequence in array of integers? (solution)
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,
Given [100, 4, 200, 1, 3, 2],
The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Challenging part of this question is that your algorithm should run in O(n) complexity. 


Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgDpWhDY

27. Given an array of of size n and a number k, find all elements that appear more than n/k times? (solution)
Another tough array based coding questions from Interviews. You are given an array of size n, find all elements in array that appear more than n/k times. For example, if the input arrays is {3, 1, 2, 2, 1, 2, 3, 3} and k is 4, then the output should be [2, 3]. Note that size of array is 8 (or n = 8), so we need to find all elements that appear more than 2 (or 8/4) times. There are two elements that appear more than two times, 2 and 3.


Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgEUgFJK

3. Given an array of integers write a program that will determine if any two numbers add up to a specified number N. Do this without using hash tables

Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgEXHwJF

*/



function findReatNumber(arr) {
    
    let n  = arr.length + 1
    let sumNthNaturalNumber = n*(n+1)/2;

    console.log(sumNthNaturalNumber)

    sum = 0;

    for(let  i = 0 ; i<arr.length ; i++) {
        sum+=arr[i]
    }

    let misingNum = sumNthNaturalNumber - sum
    console.log(misingNum)
     
    return misingNum
}


let arr = [1,2,3,4,5,6,7,8,9,10,11,13,14]

console.log(findReatNumber(arr))



// . How to check if array contains a number in Java?

//Read more: https://javarevisited.blogspot.com/2015/06/top-20-array-interview-questions-and-answers.html#ixzz7mgHcyhU9
