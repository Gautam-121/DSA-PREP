//serch the only one occurances

function search(arr , index , target){

    if(index == arr.length){
        return -1
    }

    if(arr[index] == target){
        return index
    }

    return search(arr , ++index , target)
}

let arr = [1,85,41,63,64,996]


//serch the all the occurances

function search1(arr , index , target , ans){

    if(index == arr.length){
        return
    }

    if(arr[index] == target){
        ans.push(index)
    }

    search1(arr , ++index , target , ans)
}


let containAns = []
let arr1 = [1,2,3,4,4,5]

search1(arr1 , 0 , 4 , containAns)

console.log(containAns)


