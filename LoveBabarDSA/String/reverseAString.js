
// recursive program to reverseString
function reverseString(str)
{
    // base case
    if(str.length == 0) return "";

    return str[str.length-1] + reverseString(str.slice(0 , -1))
}
console.log(reverseString("sandhya"))

// Iterative case
function reverse(str)
{
    let newStr = ""

    for(let i = str.length-1 ; i>=0 ; i--)
    {
        newStr+=str[i]
    }

    return newStr
}

console.log(reverse("gauatm"))


