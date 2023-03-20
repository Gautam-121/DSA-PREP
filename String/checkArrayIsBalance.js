function checkArrayisBalance(arr) {
    //Write your solution here
    let lengthOfArr = arr.length

    let sum1 = 0
    let i = 0;
    for (; i < Math.round(lengthOfArr / 2); i++) {
        sum1 = sum1 + arr[i]
    }
    for (; i < lengthOfArr; i++) {
        sum1 = sum1 - arr[i]
    }
    console.log(sum1)
    if (sum1 == 0) {
        return "Yes"
    }
    return "No"
}

let arr = [1, 1, 1, 2, 1]

let value = checkArrayisBalance(arr)

console.log("Array is Balance", value)


