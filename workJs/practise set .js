// using logical opeartor , find wether the age lies betweem 10 to 20

let age = 20

console.log( (age>=10 && age<=20) ? true : false)

// Demostrate the use of swich case in javascript

let fruits  =  "mango"

switch(fruits)
{
    case "mango" : console.log("Mango is good For health")
    break;
    case "Apple" : console.log("Apple is swwtest")
    break;
    case "Banana" : console.log("Banana is")
    break
    default : console.log("all is good")
}

// write program number is divisibe by eighther 2 and 3
function divisible(num)
{
    return (num%2 == 0 || num%3 == 0) 
}

console.log(divisible(19))

// use ternory operator , you can drive or not

console.log((age > 18) ? "You can drive" : "Yoy cant drive")