function reverseNumber(n ,ans){

    if(n == 0){
        return ans
    }

    let digit = n%10

    ans = ans * 10 + digit

    return reverseNumber(Math.floor(n/10) , ans)
}

let ans = 0;

ans = reverseNumber(1824 , ans)

console.log(ans)



function reverseArray(arr , start , end){

    if(start >= end){
        return
    }

    [arr[start] , arr[end]] = [arr[end] , arr[start]]

    reverseArray(arr , ++start , --end)
}


let arr = [1,2,3,4,5]
reverseArray(arr , 0 , arr.length-1)
console.log(arr)


function reverseString(str){

    if(str.length == 0){
        return ""
    }

    return str[str.length-1] + reverseString(str.slice(0 , -1))
}

console.log(reverseString("Gautam"))

// count zeroes

function count(n , count1){

    if(n == 0){
        return count1
    }

    let digit = n%10;

    if(digit == 0){
        return count(Math.floor(n/10) , count1+1)
    }

    return count(Math.floor(n/10) , count1)
}

let count1 = 0

count1 = count(20102 , count1)

console.log(count1)











