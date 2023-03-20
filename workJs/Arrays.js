/*
create 
print
read
update 
delete --> if you are delete the element from the array -> it delement the element from 
that array and stored undefined to that oplace , length must be same before deleting 
and after deleting

*/

// create an array
const arr = [1,2,3,4,5]

// Print The array
/*

for(let i = 0 ; i<arr.length; i++)
{
    console.log(arr[i])
}

// Print The array
for(let value of arr)
{
    console.log(value)
}

// Print The array
for(let index in arr)
{
    console.log(arr[index])
}

//Print The array
arr.forEach((value,index,arr) => {
    console.log(value , index)
})
*/

// read element of an array
console.log(arr[2])

// Update element in the array
arr[2] = 202

// Delete element from array
console.log(arr) // length preserved same before delete and after delete
delete arr[2]
console.log(arr)

// Method and property of array

// 1) length --> return length of array
console.log(arr.length)

// 2)PUSH --> Insert The element at the end exisiting array and return new length of array
let newLength = arr.push(100)
console.log(arr.length , newLength)

// POP --> Remove element from array and return pop element , if array is empty then return Undefined
let popEle = arr.pop()
console.log(popEle , arr.length)

// SHIFT --> Rmove element from the front of array and return shift element from array ,if array is empty then return Undefined
let shitEle = arr.shift()
console.log(shitEle , arr.length)

// unshift --> Insert Element in the front of array and return new length of array
let newL = arr.unshift(10)
console.log(newL , arr)

// typeOf array is Object
console.log(typeof arr)

// Array.isArray() // Return Boolean Value , check that this is array Data or not
console.log(Array.isArray(arr))

//Array.concat --> Basically it merge two or more array and return new array , It doenst manupulate thre original array
let arr1 = [10,20,30,40]
let arr2 = [100,200,300,400]
let arr3 = arr1.concat(arr2)
console.log(arr1 , arr2)
console.log(arr3)

// Array.fill -> The fill() method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It returns the modified array.
let arr4 = ["Guatam", "sandhya", "Dhakate"]
arr4.fill("Ishant")
console.log(arr4)

// Array.filter --> filter an array with values that passes the test , return new array , filter method not manupulate the original array , if no element matches the given condition return empty array
let arr5 = [10,2,7,89,78] // filter all the element whose value greater than 10

let newArr = arr5.filter((value , index , arr) => {
    return value > 10
})
console.log(newArr)

let arr6 =  [ // filter all the even id name  from array
    { id : 7 , fname :"Gautam"},
    { id : 1 , fname :"Sandhya"} ,
    { id :  5 , fname : "Shyamsundar"},
    { id : 9 , fname :"isha"},
]

let newA = arr6.filter((value, index , arr) => { 
    if((value.id&1) == 0) 
    {
        return value["fname"]
    }
}).map((value) => {
    if((value.id&1) == 0) 
    {
        return value["fname"]
    }
})

console.log(newA)

//Array.find() --> The find() method returns the first element in the provided array that satisfies the provided testing function. If no values satisfy the testing function, undefined is returned.
// simply return this value only , not an array form

let arr7 = ["Guatam" , "sandhya" , "MyFirstName" , "Ritik" , "Shahebhaj"]

let findV = arr7.find((value , index) => {
    return (value.length <=5)
})

console.log(findV)
 
//ForEach --> Call a function , once for each array element , It not return arry or newarray , also it not manupulate the original array
const arr8 = [10,56,78,21]

arr8.forEach((value , index) => {

    if(value%2 == 0) console.log(value)
})

// Array.indexOf --> The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.

const arr9 = ["Gauatam" , 10 ,56 ,78 , 89 , 10 ]
let inArr9 = arr9.indexOf(10)
console.log(arr9.indexOf(45))
console.log(inArr9)

// Array.join() --> The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

let arr10 = [10 , 20 , 30 , 40 , 50]
let str = arr10.join("---")
console.log( str)

// Array.map() ---> The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

let arr11 = [1,2,3,4,5,6,7,8] // I want square of all the element of the array

let newMap = arr11.map((value , index) => {

    return value * value
})

console.log(newMap)

// Array.reverse --> The reverse() method reverses an array in place and returns the reference to the same array

let arr12 = [12, 24 , 36 , 48 , 60 , 72]
arr12.reverse()
console.log(arr12)

// Array.slice(start , end) --> The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

let arr13 = [10,20,30,45,[999,999]]
let arr14 = arr13.slice(2) // --> 2 , 3  , 4
let arr15 = arr13.slice(1 , 4) // --> 1,2,3
arr14[2][0] = 1
console.log(arr13 , arr14)

// Array.sort() --> The sort() method sorts the elements of an array in place and returns the reference to the same array, now sorted
// In normal it sort the array in alphabetical order

let arr16 = [40,450,120,20,65]
arr16.sort()
console.log(arr16)
arr16.sort((a,b) => a-b) // a-b --> Ascending , b-a --> Descending
console.log(arr16)

// Array.splice(start , deleteCount , item) --> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
// It not return new Array

/*
start
Zero-based index at which to start changing the array,

deleteCount Optional
An integer indicating the number of elements in the array to remove from start.

item1, …, itemN Optional
The elements to add to the array, beginning from start.

*/
let arr17 = [10,20,30,40,80]
arr17.splice(1,2 , 900,1000)
console.log(arr17)

// Array.toString() --> The toString() method returns a string representing the specified array and its elements.
// basically it not modified the original array , it return new string

let arr18 = [10,56,78,12,36]
let newS = arr18.toString()
console.log(newS , typeof newS)

// Array.reduce() --> Reduce Method() reduced a array inro the single value

/*

reduce(function (accumulator, currentValue, currentIndex) {  }, initialValue)

accumulator
The value resulting from the previous call to callbackFn. On first call, initialValue if specified, otherwise the value of array[0].

currentValue
The value of the current element. On first call, the value of array[0] if an initialValue was specified, otherwise the value of array[1].

currentIndex
The index position of currentValue in the array. On first call, 0 if initialValue was specified, otherwise 1.

If You not specified InitialValue ,  accumulator start from 0 index , otherwise accumulator start from Initial value

currentValue --> You are specified InitialValue , accumulator start with InitialValue and currentValue start from 0 Index ,
*/

let arr19 = [10,20,30,40,50]

let arrRed = arr19.reduce((accumulator , currValue) => {

    return accumulator + currValue
})

console.log(arrRed)







