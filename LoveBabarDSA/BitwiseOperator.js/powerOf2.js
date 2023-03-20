function powerOf2fir(n){

    for(let i=0 ;i<=30;i++){
        if(n == 2**i) {
            return "Yes"
        }
    }
    return "No"
}

console.log(powerOf2fir())


function powerOf2sec(n) {

    if(n<=0){
        return "No"
    }
    if( (n & (n-1)) == 0) return 'Yes'

    return "NO"
}

console.log(powerOf2sec(2**12))

// In power of 2 , no of 1 bits == 1;

function powerOf2Third(n){
    
    let count = 0

    while(n!==0){
        if(n&1){
            count++
        }
        if(count == 2){
            break;
        }
        n = n>>1
    }
    if(count == 0){
        console.log("Yes , its power of 2")
    }else{
        console.log("No, its not power of 2")
    }
}

// let days = "Webnesday"

// switch(days) {

//     case "Monday" : {
//         console.log('Mondays')
//     }
//     break;

//     case "Webnesday" : {
//         console.log('Webnesday')
//     }
//     break;

//     case "Thusday" : {
//         console.log("Thusdays")
//     }

// }


// function aTopowerb(a,b) {
    
//     return (a**b)
// }

// console.log(aTopowerb(4,5))


// function factorial(n){
    
//     let product = 1

//     for(let i =1 ;i<=n ; i++){
//        product = product * i
//     }
//     return product
// }

// function combination(n,r){

//     let num = factorial(n)
//     let dino = (factorial(r) * factorial(n-r))
//     let final = num/dino

//     return final
// }

// console.log(combination(5,3))


// pass by value;
// let arr = [1,2,3,4];

// function passByValue(arr) {
//    arr[2] = 6 ;
//    return arr
// }

// console.log(passByValue(arr))
// console.log(arr)