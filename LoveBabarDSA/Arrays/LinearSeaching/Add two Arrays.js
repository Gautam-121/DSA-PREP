// add two arrays 

 /*

 case - 1

 [1 , 2 , 3 , 4]  --->  1 2 3 4
 [6]                          6
---------------------> ---------
-------------------->    1 2 4 0

case - 2

 
 [6]                          6
 [1 , 2 , 3 , 4]  --->  1 2 3 4

---------------------> ---------
-------------------->    1 2 4 0


case -3


[9 9 9 ] ---> 9 9 9 
[9 9 9 ]----> 9 9 9 
------------>--------
------------>1 9 9 8

 */


// Brute force approch

/*

1---> create num from arry -1
2---> create num from arry -2

3-----> add num1 + num2

4-----> convert this number into digit from and stored in array 

5-----> reverse a arry , this give sum of arry 1 and arry 2

*/

function addArray(arr1 , arr2)
{

    // reverse of an array

    function reverse(arr) 
    { 
        let i = 0
        let j = arr.length-1

        while(i<j)
        {
            [arr[i++] , arr[j--]] = [arr[j] , arr[i]]
        }

    }
    // craete number from array1

    num1 = 0

    let  i = 0;

    while(i<arr1.length) // O(n)
    {
        num1 = (num1 * 10) + arr1[i]
        i++
    }

    // create number from array 2

    let  j = 0;
    let num2 = 0

    while(j<arr2.length) // O(m)
    {
        num2 = (num2 * 10) + arr2[j]
        j++ 
    }

    // convert num1 and num2 in string to Number

    let sum = num1 + num2

    let ans = []

    while(sum!=0) //O(number of digit of sum)
    {
        let digit =  sum%10
        ans.push(digit)
        sum = Math.floor( sum/10)
    }
    
    reverse(ans)  // O(max(n,m) + 1)

    return ans

}

console.log(addArray([9,9,9] , [9,9,9]))


// optimization approch

function addArray1(arr1 , arr2)
{

    // reverse of an array

    function reverse(arr) 
    { 
        let i = 0
        let j = arr.length-1

        while(i<j)
        {
            [arr[i++] , arr[j--]] = [arr[j] , arr[i]]
        }

    }

    let  i = arr1.length - 1
    let  j = arr2.length - 1

    let carry = 0

    let ans = []

    // case  - 1

    while(i>=0 && j>=0)
    {
        let val1 =  arr1[i] // value at ith index
        let val2 =  arr2[j] // value at jth index

        let sum = val1 + val2 + carry // sum at ith index and jth index

        let passedInAns = sum%10

        carry = Math.floor(sum/10)

        ans.push(passedInAns)

        i--
        j--
    }

    // second case

    while(i>=0)
    {
        let sum  = arr1[i] + carry

        let passedInAns = sum%10

        carry = Math.floor( sum/10)

        ans.push(passedInAns)

        i--
    }

    while(j>=0)
    {
        let sum  = arr2[j] + carry

        let passedInAns = sum%10

        carry = Math.floor( sum/10)

        ans.push(passedInAns)

        j--
    }

    // fisrt case carry remain

    while(carry!=0)
    {
        let sum  =  carry

        let passedInAns = sum%10;

        ans.push(passedInAns)

        carry = Math.floor( sum/10)
    }

    reverse(ans)

    return ans
}

console.log(addArray1([9,9,9] , [9,9,9]))









function sum(arr1 , arr2){

    let i = arr1.length - 1
    let j = arr2.length - 1
    let carry = 0

    let arr3 = []

    while(i>=0 || j>=0 || carry!=0){

        let sum = 0

        if(arr1[i]){
            sum+=arr1[i]
        }
        if(arr2[j]){
            sum+=arr2[j]
        }
        if(carry!=0){
            sum+=carry
        }

        arr3.push(sum%10)

        carry = Math.floor(sum/10)

        if(i>=0) i--
        if(j>=0) j--
    }

    arr3.reverse()

    console.log(arr3)
}


sum([9,9,9] , [9,9,9])