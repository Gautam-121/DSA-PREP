// conditional statement , using if , else if , else using this we write condition of expression
// Prompt and alert function

let age = prompt("What is Your age")
// In promt value they return , in the form of string , convert the string into perticular data type for performing operation
age = (+age) // age = Number.parseInt(age) , age = Number(age)

console.log(typeof age)

// Prompt ke throught hm browser se data lete hai

if(age > 10 && age < 18)
{
    alert("Yoy are Not eligiable")
}
else if( age >=18 && age < 30)
{
    alert("yOU ARE ELIGIBLE") // ALERT data passed krne ke liye used krte haiu
}


let x = 5
let y = 100

if(y%x==0)
{
   console.log("Yes, It is")
   
}
if(y == 100)
{
    console.log("Its also good")
}
else if(y == 100)
{
    console.log("its also right")
}
else
{
   console.log("false")
}

// ternary operation

let a =  (x%y ? true : false )
console.log(a)


// Switch expression

let days = prompt("what is today")

switch(days)
{
    case "monday" :  console.log("It is shiva days" , days)
    break;
    case "Tuesday" : console.log(" It is  hanuman days" , days)
    break;
    default : console.log("all days is same")
}

