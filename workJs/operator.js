// operator in javascript

// Arithmatic Operator

let a = 20
let b = 10

//Addition operation

console.log( a + b)

// Substraction Operation

console.log( a - b)

// Multiplication

console.log( a * b)

// Division Operator

console.log( 45 / 4)

// Modulus operator --> Return remainder of two number

console.log( 45%4)

// Power Operator

console.log( a ** b)

// Increment Operator
/*
There are two type 
1) Pre-Increent operator ++i
2) Post-Increment operator i++
*/

// PreIncrement operation
let i = 5 

let sum = 55 + (++i)

console.log(sum , i)

// PreIncrement operation
 sum = 55 + (i++)

console.log(sum , i)

// Decrement Operator
/*
There are two type 
1) Pre-Decrement operator ++i
2) Post-Decrement operator i++
*/

let j = 5 

let sub = 55 + (--j)

console.log(sub , j)

// PreIncrement operation
 sum = 55 + (j--)

console.log(sub , j)

// Assignment operator "="

let num1 = 5
let num2 = 6

num1+=num2 // nums1 = nums1 + nums2
num1-=num2 // num1 = num1 - nusm2
num1*=num2 // num1 = nums1 * nums2
num1/=num2 // num1 = num1/num2
num1>>=1   // num1 = num1 >> 1
num1<<=1   // num1 = num1 >> 1
num1%=num2 // num1 = num1%num2
num1**=num2 // nums1 = nums1 ** nums2

num1+=5  // nums1 = nums1 + 5

console.log(num1)


// comparision operator

// 1) ==  comapare their value only

let m = 5
let n = "5"

console.log(m==n)

// 2) ===  comapare their value and their data type

console.log( m === n)

// 3 ) != compare value only ---> not equal

console.log(m!=n)

// 3 ) !== compare value ans data type is not equal ---> not equal

console.log(m!==n)

// Logical operator

//1) AND OPERATOR , if all the condition is true , then return true , otherwise return false

if(m == 5 && n == 6)
{
    console.log("returen-->" , true )
}
else
{
    return false
}

//2) Or OPERATOR , if at least one condition is true , then return true , otherwise return false

if(m == 5 || n == 6)
{
    console.log("returen-->" , true )
}
else
{
    return false
}

//2) Or OPERATOR , if at least one condition is true , then return true , otherwise return false

if(!(m=="6")) {
    console.log("true")
}
else
{
    console.log(false)
}

// TypeOf operator --> Check type of data type in that of value

console.log(typeof m)

// Bitwise operator

// AND & , OR | , XOR ^ , NOT~ , Right Shift >> , Left Shift <<

let s1 = 5
let s2 = 6

console.log(s1&s2) // 5 --> 101 & 6 --> 110 --> 100 --> 4

console.log(s1|s2) // 5 --> 101 | 6 --> 110 --> 111 --> 7

console.log(s1^s2) // 5 --> 101 ^ 6 --> 110 --> 011 --> 3

console.log(~s1) // 5 --> 0000000101 --> 1st compliment --> 1111111111010 --> 
// 2nd compliment 1111111111010 + 1 ==> 111111111111011  --> 
// if 1st bit is zero --> postive , one --> Negative

// 1st compli --> 00000000000000100 -->  2nd comp --> 00000000000000101 --> -5

