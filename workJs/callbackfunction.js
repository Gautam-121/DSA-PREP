// callback function is a function passed into another funtion as a parameter , which is
// invoked inside outer function this inner function executed first then outer function
// is executed, it is very useful in of asynchronous operation

// Why we say it very usefull in asynchronous operation
/*

if you print two asynchronous operation , after that complition of first then second second
will start execution , this type of you output get throught using callback function in asynch

*/

// Ex--> Without callback function

// setTimeout(()=>{
//     console.log("First")
// },2000)

// setTimeout(() => {
//     console.log("Second")
// },1000)

// function first(val)
// {
//     setTimeout(()=>{
//         console.log("First" , val)
//     },2000)
// }

// function second(val , callback)
// {
//     callback(val)
//     setTimeout(()=>{
//         console.log("Second")
//     },1000)
// }

// second(10 ,first)


// function show_me_message() {
//     console.log("You have print this after 2000 sec")
// }

// setTimeout(show_me_message,2000)
// console.log("Second")

// function caller(val , callback)
// {
//     callback(val)
//     console.log("Your query is resolved")
// }

// function callMe(val)
// {
//     console.log("Ok! i will be resolved your query give",val , "min")
// }

// caller(10 , callMe)








// function print(num , callback)
// {
//     if(num >= 5)
//     {
//         callback(null , num)
//     }
//     else
//     {
//        callback(new Error() , num)  
//     }
// }


// function caller(err , val1){
    
//     if(err)
//     {
//         console.log("It very Bad news")
//     }
//     else
//     {
//          console.log("It very good news")
//     }
// }

// print(10 , caller)
// console.log("1")
// console.log("2")
// console.log("3")
// console.log("4")

// // callback another example direct passed argument as callback to another function

// let callthis = (val , callback) => {

//     if(val > 5)
//     {
//         return callback(null , val)
//     }
//     else
//     {
//         return callback(new Error() , val)
//     }
// }

// let final = callthis(4, (err , val)=>{
    
//     if(err) return "Throw Errow"
//     else return val*val
// })

// console.log(final)

// console.log("Gautam")
// console.log("Sandhya")
// console.log("Puru")
// console.log("Puru")


// passed callback function on setTimeOut()

// console.log("First")

// setTimeout(()=>{
//     console.log("Hey print this value after 1000")
// })

// let callertone = (val , callback)=>{
//     callback(val) 
// }

// let addFun = (a)=>{
//     console.log("Done operation" , a)
// }

// callertone(10 , addFun)

// console.log("Second")
// console.log("Third")

// Problem statement

// var products = ['Mobile','TV']; 

// function addProduct(product, callback) {
//   setTimeout(function () { 
//      products.push(product); 
//   }, 2000)
// }

// function getProduct() { 
//    setTimeout(function () {
//     console.log("products --> " + products) 
//    }, 1000) 
//  } 

// addProduct("camera")
// getProduct()



//  addProduct("Camera", getProduct);

// solution callback

// var products = ['Mobile','TV']; 

// function addProduct(product, callback) {
//   setTimeout(function () { 
//      products.push(product);
//      callback()
//   },2000)
// }

// function getProduct() { 
//    setTimeout(function () {
//     console.log("products --> " + products) 
//    }, 1000) 
//  } 

// addProduct("camera" , getProduct)



let arr = ["Mobile" , "Tv"]

function popItem()
{
  return new Promise((resolved,reject)=>{
    
    setTimeout(()=>{
    let a = arr.pop()
    console.log("The pop value is " , a)
    resolved("its , done")
    },1000)
  })
}

function addItem1(item , arr)
{
  return new Promise((resolved , reject) => {
    setTimeout(()=>{
      arr.push(item)
      resolved("yes done")
    })
  },2000)
}

console.log(arr)

addItem1("camera" , arr)
.then(popItem)
.then(addItem1("showcase" , arr))
.then(popItem)
.then(addItem1("lamba" , arr))
.then(popItem)

