function reverseStringAccordingWord(str) {
    str = str.split(" ")

    let arr = []

    if (str.length % 2 == 0) {
        for (let i = (str.length - 1); i >= 0; i -= 2) {

            let indStr = str[i]
            let newstr = ""

            for (let j = (indStr.length - 1); j >= 0; j--) {
                newstr = newstr + indStr[j]
            }
            arr.push(newstr)
        }
        for (let i = 0; i < str.length; i += 2) {
            arr.push(str[i])
        }
    } else {
        for (let i = (str.length - 1); i >= 0; i -= 2) {

            let indStr = str[i]
            let newstr = ""

            for (let j = (indStr.length - 1); j >= 0; j--) {
                newstr = newstr + indStr[j]
            }
            arr.push(newstr)
        }
        for (let i = 1; i < str.length; i += 2) {
            arr.push(str[i])
        }
    }
    return arr
}

console.log(reverseStringAccordingWord("Ashish Yadav Abhishek Rajput Sunil Pundir Prem"))