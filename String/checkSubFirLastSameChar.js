function solution(str) {
    //Write your solution here
    let count = 0
    for (let i = 0; i < str.length; i++) {
        let newStr = str[i]
        count++
        for (j = i + 1; j < str.length; j++) {
            newStr = newStr + str[j]
            if (newStr[0] == newStr[newStr.length - 1]) {
                count++
            }
        }
    }
    return count
}

console.log(solution("abcab"))