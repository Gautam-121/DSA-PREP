// Tc -- O(n) , Sc --O(1)
/*

Given a sorted array and a number x, find a pair in an array whose sum is closest to x.

Examples:

Input: arr[] = {10, 22, 28, 29, 30, 40}, x = 54
Output: 22 and 30

Input: arr[] = {1, 3, 4, 7, 10}, x = 15
Output: 4 and 10
A simple solution is to consider every pair and keep track of the closest pair (the absolute difference between pair sum and x is minimum). Finally, print the closest pair. The time complexity of this solution is O(n2)

An efficient solution can find the pair in O(n) time. The idea is0 similar to method 1 of this post. The following is a detailed algorithm. 
*/


function findSumClosetToX(arr , x) {

    let i = 0;
    let j = arr.length - 1
    let min = Infinity
    let a = 0
    let b = 0

    while(i<j) {

        if(arr[i] + arr[j] == x) {
            let temp = []
            temp.push(arr[i], arr[j])
            return temp         
        }
        else if(arr[i] + arr[j] < x) {

            current_Sum = Math.abs(x - (arr[i] + arr[j])) 
            if(min > current_Sum) {
                min = current_Sum
                a = arr[i]
                b = arr[j]
                
            }
            i++
        }
        else {

            current_Sum = Math.abs(x - (arr[i] + arr[j])) 
            if(min > current_Sum) {
                min = current_Sum
                a = arr[i]
                b = arr[j]
                
        }
        j--
    }
  }
  
  console.log(a ,b , min)
}

findSumClosetToX([10, 22, 28, 29, 30, 40], 54)


