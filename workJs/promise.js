let product = ["Mobile" , "Tv"]

function getProduct()
{
    setTimeout(()=>{
        console.log("All products" , product)
    },1000)
}

let addProduct = function (name)
{
    return  new Promise((resolve , reject)=>{
        setInterval(()=> {
            product.push(name)
            let flag = false
            if(flag) resolve()
            else reject("Kuch to problem hai")
        },2000)
    })
}

// addProduct("camera").then(() => getProduct).catch((err)=> console.log(err))
console.log("kya problem hai")


function foo1()
{
    return {
        bar : "hello"
    }
}

function foo2()
{
    return 
    {
        bar : "hello"
    }
}

console.log(foo1())
console.log(foo2())


let arr = [{a : 1} , {b : 2} , {c : 3} , [6,8,9],"Guatam" , true]

let arr1 = []

for(let value of arr)
{
    if(Array.isArray(value)) arr1.push([...value])
    else if (typeof value != "object") arr1.push(value)
    else arr1.push({...value})
}

arr1[1]["b"] = 5
arr1[3][2] = 25

console.log(arr1)
console.log(arr)

console.log(isNaN("lllkj"))
