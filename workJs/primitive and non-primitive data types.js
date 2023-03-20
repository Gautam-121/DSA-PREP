// Data types --> Data types are data they are sored in memory
/*
there are Two types of data types
1) Primitive data types -- > there are 7 primitive data types  -->  
2) Non-primitive data types

trick --> N N S S B B U
--> Null , Number , String , Symbol , Bigint , Boolean , Undefined

Nulll ----> IS like empty , that we defined we stored empty thing , that means we cant stored anything
Number ---> any numberr value , they are Number Data tpe
String --> Anything inside doble "" , is Called string Data type
BigInt --> If you stored bigBig number then use number data type
Boolean --> Boolean data type conatain two values , true and false
Undefined --> When we cant stored anything , javascript predefined stored undefined value
and their datatype is also undefined

Non-primitive data types

1) Array --> Array is collection of same or different data type of data store in continuos
location of memory , and we can access any value in array with the help of their index
Number

2) Object --> Object is coolection of (key , value) pair , we can map the data in the form of key , value
key --> in object always is string data type and value--> is stored any data type 
*/

// creation of arr
let arr = new Array(10) //  [und , und , ....... , und]
// we have create array of size 10 , javascript stored its predined identifier value undefined in that place

//if read pertcular index value of array use index and read their value
console.log(arr[5])

// update array value using index number
arr[5] = 14
console.log(arr[5])

// delete any index value we have sme operation for that 
/*

1)push  -->using push operation we have add element at the end of array , it return new Length of array
2)pop --> using pop operation we have remove element from the end of array , it return remove element in array , if array is empty , then he return undefined
3)shift --> using shift operation in array we have remove element from the from of array , it return remove element in array
4)unshift --> using unshift operation in array we have add element in the front of array 
5)slice --> if you want to delete perticular portion of array using slice operation we have remove it , it return new Length of array

*/


// Delete

let nums =  [2 , 45 ,78 ,35 ,9]
console.log(nums)

let a = nums.push(100 , 200) // return new length of array
console.log(nums, a)  // [2,45,78,35,9,100,200]

// pop
let b = nums.pop() // 200
console.log(b)

// shift
let c =  nums.shift()
console.log(c)

// unshift
let d =  nums.unshift(10)
console.log(nums , d)


// object .// craete an objext

let obj =
{
    name :  "Guatam" ,
    age  : 22 ,
    Address : "Vinobha bhave Nagar , Nagpur" ,
    Hobbies : ["Dnacing" , "sreading" , "smashing" , "playing"],
    obj2 : {
        lName : "Dhakate",
        fName : "Shyamsundar",
        age : 48,
        Hobbies : ["Motivation" , "Helpimg someone"]
    }
}

// Read the value of object
console.log(obj["obj2"]["Hobbies"][1])

for(let i = 0; i<Object.keys(obj).length ; i++)
{
    console.log("Keys-->" , Object.keys(obj)[i] , "Values===>" , obj[Object.keys(obj)[i]])
}

// update the object value
// obj.obj2.age = 45
obj["obj2"]["age"] = 45

console.log(obj["obj2"])

// Delete
console.log(obj)


// Object.keys(obj) --> return all the keys of an object in the form of array

let key = Object.keys(obj)

console.log(key)

// Object.Values(obj) --> return all the valurs of an object in the form of array

let valu = Object.values(obj)

console.log(valu)

// / Object.entries(obj) --> return all the key value pair in the form of array

let entr = Object.entries(obj)

console.log(entr)

// add new key and add new value in obj

obj["obj2"]["surname"] = "Raut"
obj["obj2"]["Hobbies"][3] = "Raut"

obj.name = "Sandhya"

console.log(obj)





