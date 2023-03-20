// let and const also be hosted , when you run the code ,  before executing single line of code
// memory is allocate each variable and function , but in case of let and const memory
// allocated to differnt location other than g;oabla space , and You can access this value after 
// storing some value to it , this time phrame between let and const hoisted to declared 
// some value to it is called temporal dead zone

// console.log(x)  // We got reference error --> X is not defined in scope

// let a = 10
// let b = 20


console.log(a) // We got reference eroor --> cannot access a before initilization ,
// we can access "a" after vanish our temporal dead zone

let a = 10
var b = 20 


// const b; // We got syntex error here --> missing initializer we const variable
// b = 100
// console.log(b)
