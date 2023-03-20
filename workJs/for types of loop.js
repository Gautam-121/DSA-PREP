// loops in javascript

/*

let n  = prompt("give the value of n for sum") // prompt return in the form of string
n = (+n)

for(let i = 0 ; i<n ; i++)
{
    console.log(i) // Print all value from 0 to n-1
}

console.log(i) //  we cannit access the i value because i defined with let , and let is
// my block scope variable , you can access their value on that scope only 
// but if you are declared this variable with var then you can access it , because var is
// my global level variable

let i = 0
for(;;) // Yoy can write this way also , it not nexxessary to intitialise only this paranthesis
{
    if(i<n) console.log(i)
    else break;

    i++
}

*/

// For of Loops --> in For of loop , you can access their value , and only iterable value

for(let value of "Gautam")
{
    console.log(value)
}


let  arr = [1,2,3,4,5]

for(let value of arr)
{
    console.log(value)
}

// But You cant access non-iterable objects in for of loop

let  obj = 
{
    shubh : "Gautam",
    mangal : "Isha",
    savdhan : "suyash"
}

// You cannot do this operation , it throw error --> obj is not iterable
// for(let value of obj)
// {
//     console.log(value)
// }


// For In loop // --> It access key of object , value of array

for(let key in obj)
{
   console.log("The name is" , key , "--> value is" , obj[key] ) // key --> in string 
}

let nums = ["gautam" , "Sandhya"]

for(let index in nums)
{
   console.log("The name at" , index , "--> value is" , nums[index] ) // key --> in string 
}





