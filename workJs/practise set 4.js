// what will be following output

console.log("har\'".length)

// Include function of string --> Return boolean value , we provide some string this check this included in main str or not
// this is inclute or not

let str = "My name is Gautam Dhakate , and my born city is Nagpur"

console.log(str.includes("Gautam"))

// startWih function --> It return Boolean value --> It check we provide str , our main str startwith this or not , 

console.log(str.startsWith("My"))

// endswith function --> It return Boolean value --> It check we provide str , our main str endswith this or not ,

console.log(str.endsWith("Nagpur"))

// extract amount out of this

let str1 = "Please give me a Rs 1000"

let indexLast = str1.indexOf("1")

let extrStr = str1.slice(0 , indexLast)

console.log(extrStr)

let repaStr = str1.replace("a" , "b")

console.log(repaStr)

console.log(str1.indexOf("1000"))

console.log(str1.split())