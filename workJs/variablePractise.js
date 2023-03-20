/*
 what is variable --> variable is container where we stored data , there are three 
 type of variable --> let , var , const

 var --> global level variable , i.e hm khise bhi change kr skte isko
 let , const --> block scope level variable --> i.e hm us code ka scope define krte hai perticular
 us scope me wo code run hoga

 */

 // var global level explain

var fname; //  if hm sirf variable create krte hai aur wha koi value stored nhi krte then
//javascript predefined value store krta hai , jo ki undefined hai , only let , var me , --> const is constant variable
console.log(fname)

var fname = "Gautam"  // var --> variable , name --> identifier , = --> assignment operator , "Gautam" --> string literal
console.log(fname) //  "Gautam"

fname = 21 
console.log(fname) // 21

{
   var fname = undefined
   console.log(fname)  // undefined
}

console.log(fname)  // "undefined"

// let const scope level explain

let lName; // predined value store by javascript called undefined
console.log(lName) // Undefined

lName = "Dhakate"
console.log(lName)  // Dhakate

{
    let lName = "Nimje"
    console.log(lName) //  Nimje
}

console.log(lName) // "Dhakate"

const myName = "Harsh" // const variable is neccesarry to store value at that time of initialization
console.log(myName)


console.log("genarl differance")
console.log(" ")

console.log("var identifier with var can be re-initialized but let and const cannot")

var a = 5
console.log(a)
var a = 25
console.log(a)

console.log("we can reAssign let and var variable value , but cannot const variabl value")

a = 35
console.log(a)
let b = 12
b = "myName"
console.log(b)

const c = "OHH handsome"
// c = "myHobby" // we cannot re-assigned to constant variable
console.log(c)


