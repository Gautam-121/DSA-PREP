// this sis Functional Programing
let arr = [2, 4, 6, 8]

const area = radius => Math.PI * radius * radius
const circumference = radius => 2 * Math.PI * radius
const diameter = radius => 2 * radius

const calculate = (arr ,logic) => {
    let output = []
    for(let radius of arr){
        output.push(logic(radius))
    }
    return output
}

console.log(calculate(arr,area))
console.log(calculate(arr , circumference))
console.log(calculate(arr, diameter))

// Map filter reduce highr order function

let arr1 = [5,7,9,11]

let square = arr1.map((value , index , arr) => value * value)
let cube   = arr1.map((value , index , arr) => value * value * value )

// Find Sum of arr
function sumArr(arr1){
    let sum = 0;
    for(let i = 0 ; i<arr1.length ; i++){
        sum  = sum + arr1[i]
    }
    return sum
}

let sum = arr1.reduce( (accumulater , currentValue) =>  {
   accumulater =  accumulater + currentValue 
   return accumulater
},0)

console.log(sum)
console.log(sumArr(arr1))


// Find max of arr
function maxArr(arr1){
    let max = -Infinity
    for(let i = 0 ; i<arr1.length ; i++){
        if(arr1[i] > max) max = arr1[i]
    }
    return max
}

let max = arr1.reduce( (acc , curr) =>  {
   if( curr > acc ) acc = curr
   return acc
},-Infinity)

console.log(max)
console.log(maxArr(arr1))

let users = [
    {fName : "Gautam" , lName : "Dhakate" , age : 26},
    {fName : "Ritik" , lName : "Fatting" , age : 75},
    {fName : "Isha" , lName : "Nimje" , age : 50},
    {fName : "Suyash" , lName : "Sadawarti" , age : 26}
]

// ["Gautam Dhakate" , "Ritik Fatting" , "Isha Nimje"]

let fullName = users.map( x => x.fName + " " + x.lName)
console.log(fullName)


//{26 : 2 , 75 : 1 , 50 : 1}
let ageAllAfter = users.reduce((acc , curr)=>{
    acc[curr.age] = (acc[curr.age] || 0) + 1
    return acc
},{})
console.log(ageAllAfter)

// using map and filter
let ageLess30 = users.filter( x => x.age < 30 ).map(x => x.fName)

let useReduce = users.reduce((acc , curr) => {
    if(curr.age < 30) acc.push(curr.fName)
    return acc
},[])
console.log(useReduce)