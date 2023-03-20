// what is asynchronous operation in javascript? is javascript synchronous or asynchronous?

// console.log("1")
// console.log("2")
// setTimeout(()=>{
//     console.log("The code from asyn 3")
// },5000)
// console.log("4")

let fun = () => {
    return new Promise((res , rej) => {
        setTimeout(() => {
            res(2)
        }, 3000)
    })
}

asyncfun = async () => {
    console.log(1);
      await fun().then((res)=>{
        console.log(res);
    }).catch(err => console.log(err))
    console.log(3);
}
asyncfun()
