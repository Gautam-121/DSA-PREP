//  A JavaScript function is a block of code designed to perform a particular task.
// var is my function scope , You cant access var variable value outside the function

// Function Declaration
function addTwoNumber(x,y)   // addTwoNumber --> Function Name , x , y --> parameter
{
    var fname = "Gautam"
    return x+y
}

let a = 3;
let b = 4;
let c = 5;

console.log(a+b) 
console.log(addTwoNumber(a,b))   // --> function addTwoNumber invocation passed argument
console.log(b+c)
console.log(addTwoNumber(b,c))
console.log(c+a)
console.log(addTwoNumber(c,a))


// Different ways to write a function

function sum(a,b) // function declaration
{
    return a+b
}

var sum1 = function(x,y) // fuction variable me store ho rha hai , to jb variable 
{                         // store execuation contest chalega to sum me phle undefined store rhega
    return x+y
}

const add = (a,b)=>{ return a+b} // Arraow function


let strJson = `{"fname" : "Guatam",  "lname" : "Dhakate" }`

let jsonObj = JSON.parse(strJson)

console.log(jsonObj , typeof jsonObj)

let jsonStr = JSON.stringify(jsonObj)

console.log(jsonStr , typeof jsonStr)
