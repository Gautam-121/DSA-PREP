'use strict'
// How Js Work or how js code executed behind the seen

function myFun()
{
    return this
}

const myFun1 = () => {
    return this
}


/*
https://www.geeksforgeeks.org/how-javascript-works-and-code-is-executed-behind-the-scene/
---------------------------------------------------

var fname = "Guatam"
var lName = "Dhakate"

var n = 2

function square(num)
{
    var ans  =  num * num
    return ans
}

var square1 = square(n)

----------------------------------------------------------*/

// Hoisting and how hosting done 
https://www.geeksforgeeks.org/javascript-hoisting/

/*---------------------------------------------------------

getName()
console.log(getName)
console.log(x)

getName1() // it act as normal variable and stored undefined in their placeholder
getName2()

var x = 7

function getName()
{
    console.log("Guatam Dhakate")
}

var getName1 = function ()
{
    console.log("Namaste Bharat")
}

var getName2 = function ()
{
    console.log("Namaste Hindustan")
}

console.log(x)
getName()

----------------------------------------------------------------*/

// How function work behind the seen

/*-------------------------------------------------------

var x = 7
a()
b()

function a()
{
    var x = 9
    console.log(x)
}

function b()
{
    var x = 10
    console.log(x)
}

console.log(x)

-------------------------------------------*/

// window and this keyword

/*
Window Keyword This is a functionality provided by JavaScript engine. basically window is the class in which various functions and methods are encapsulated. These functions and methods can be used anywhere inside our JavaScript program. This Keyword This is an another functionality provided by JavaScript engine.

var x = 7
a()
b()

function a()
{
    var a = 9
    console.log(a)
}

function b()
{
    var x = 10
    console.log(x)
}

console.log(window.a)
console.log(this.x)
console.log(x)

--------------------------------------------------------*/

// Difference between Undefined anf Not defined

/*
https://www.geeksforgeeks.org/explain-the-difference-between-undefined-and-not-defined-in-javascript/

console.log(a) // undefined
var a = 10

function fName()
{
    lName()
    function lName()
    {
        console.log(b) // b is not defined
    }
}

console.log(a)  // print 10
fName()

*/

// The scope chain , scope and lexical environment

// scope --> 

// function a()
// {
//     c()
//     function c()
//     {
//         console.log(b)
//     }
// }
 
// let b = 10
// a()

// let str = "Gautam"

// let fname = str.replace("ga" , "S")

// console.log(fname)

/*
a = 10
console.log(a)

let key1 = "email"
let value1 = "guatmdhakate1234"

let obj = {}

obj.key1 = value1
obj[key1] = value1

console.log(obj)


// Way to create an object

// First way

const obj1 = {
    fname : "Gautam"
}

// Second way

const obj2 = Object.create({})

console.log(typeof obj2)

*/

// console.log(this)
// console.log(window)


// const obj3 = {
//     fname  : "Gautam",
//     lNmae : "Dhakate",
//     fullNmae : function (){
//         console.log(`${this.fname} , ${this.lNmae}`)
//     }
// }

// console.log(obj3.fullNmae())


console.log(myFun())
console.log(myFun1())


