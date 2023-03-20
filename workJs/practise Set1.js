// create a variable of type string and try to add number to it

let a = "2"
a+=2
console.log("Datatype of a --> " ,typeof a , "value of a -->" , a)

// create a const object in javascript ,can you change it --> Yes
// const is constant variable , but it store the location of obj ,  or array reference
// data type , we can passed them as a passed by reference , cosnt me us obj ka location stored hai
// i have not updating the value stored in const , which value const stored , it store location

const obj = 
{
    name : "Guatam",
    Age  : 22,
    Address : "Vinobha bhave nagar , nagpur"
}

obj.Age = 21
console.log(obj)

//obj = "Gautam" // You cant do this , you have assigned new value to const variable

// Try to add new key in object and new value in arrayin const we have do it --> yes
// const is constant variable , but it store the location of obj ,  or array reference
// data type , we can passed them as a passed by reference , cosnt me us obj ka location stored hai
// i have not updating the value stored in const , which value const stored , it store location

obj["Hobbies"] = ["Dancing" , "Fliping" , "Running"]
console.log(obj)






