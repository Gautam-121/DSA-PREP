/*
string is immutable --> that means you perform any operation on that string it return new string
it cannot manupulate the original string , is called as immutable

string is iterable

*/

let carName = "Indigo"

console.log(carName[0])
console.log(carName[1])
console.log(carName[2])
console.log(carName[3])
console.log(carName[4])
console.log(carName[5])



// Anything You have seen in "" , '' , `` , is called string , string is used to manipulating the text


// We can insert variable directly in template literal , this is called string manupulation

let str1 = "Gautam"
let str2 = 'Dhakate'
let combined = `My name is ${str1} and my surname is ${str2}` // template literal

console.log() // template literal 
// using template literal we can concatinate the string 

// Other ways also for concatination , but Template literal is best way
console.log("My name is " , str1 + " " + "My suranane is" , str2)


// Properties of string , it always return new string ,after manipulation , after 
// performing inbuild operation

// Length property --> return length of string

let len = str1.length
console.log(len)



// Escape sequence character

// 1) \

let fName = 'Gautam\'s'

console.log(fName)

let lname = "Bnana\nna"

console.log(lname)


// String methods

// 1) Uppercase to Lowercase , Use .toLowerCase

let str = "Guatam"
str = str.toLowerCase()
console.log(str)

// 2) LowerCase to Uppercase , Use .toLowerCase

let a = "gauta\nm"
a = a.toUpperCase()
console.log(a)

// 3) length of string , is property

let leng = a.length
console.log(leng) 

// 4) slice , extract pertiular portion of string  ) str.slice( start , end ) 

// start , end --> represent index , start --> Include , end --> Excludes

let myHome = "My Home name is Gautam"
// myHome = myHome.slice(3)
console.log(myHome.slice(3 , 6)) // start from index 3 to 5 , (3 , 4 , 5)
console.log(myHome.slice(3)) // strat from index 3 to upto end
console.log(myHome.slice(3 , -1))  // strat from index 3 to upto end n-1


// 5) replace --> replace whole word or character with another word 

// str.replace(str1 , replaceStr) --> str1 --> Hmare str me hona chahiye to hi replace
// hoga otherwse replace nhi hoga

let myadd = "My address of portal is Guatam"

myadd = myadd.replace("portat is Guatam" , "Zone")

console.log(myadd)

// conacat string

let name1 = "Guatam"
let name2 = "Dhakate"

let fullName = name1.concat("is love their surname " ,name2 , "is firss")

console.log(fullName)

// trim function in string --> remove trailing and leading splace of string

let myGhar = "      vinobha bhave nagar      "

myGhar = myGhar.trim()

console.log(myGhar)