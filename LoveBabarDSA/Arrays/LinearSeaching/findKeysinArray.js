 function linearSearch(arr , n){
    
    if(arr.length ==0){
        return false
    }

    for(let i = 0 ; i<arr.length ; i++){
        if(arr[i] == n){
            return "Yes"
        }
    }
    return "No"
 }

 console.log(linearSearch([1,7,9,2,11]))


 // serach value 3 in the indexRange = [1,4]

 function findInPer(arr ,s , e , target) {

    if(arr.length ==0) {
        return false
    }

    for(let i = s ; i<=e ; i++) {
        if(arr[i] == target ) {
            return true
        }
    }
    return false
 }

 console.log(findInPer([-18,14,13,45,78,1],2,5,23))


 let map = new Map()

 map.set(1 ,1)

 console.log(map)

 map.delete(1)

 console.log(map)



 function keyInArray(arr , key){

    for(let val of arr){

        if(val == key) return true
    }

    return false
 }