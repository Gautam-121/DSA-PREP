// let arr =[10,5,7,-1,8,2,11]
// let secondArr = [5, 8, 2, 11]
// if sequence of elemnt seondArr is same as arr  like -->  5 after then 8 then 2 then 11
// return true
// else false
// let secondArr = [10, -1, 11, 2]




function isSameSequence(arr1 ,arr2) {

    let map = new Map()

    for(let i=0 ; i<arr2.length ; i++) {
 
        map.set(arr2[i] , i)
    }

    let count = -1;

    for(let i = 0; i<arr1.length ; i++) {

        if(map.has(arr1[i])) {

            count++

            if(map.get(arr1[i]) !== count) {

                return false
            }
        }
    }
    return true
}


// approch -2

function isSameSequence1(arr1 , arr2)  {

    let i = 0;
    let j = 0;

    while(i<arr1.length) {

        if(arr1[i] == arr2[j]) {
            i++
            j++
        }
        else{
            i++
        }
    }
    
    if(arr2.length == j) return true

    return false
}



let first = [10,5,7,-1,8,2,11,4]
let second = [5, 2, 11, 4 , 10]

console.log(isSameSequence1(first, second))

