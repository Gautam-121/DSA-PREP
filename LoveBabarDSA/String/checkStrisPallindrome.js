// recursive method

function toLower(char)
{
    if(char >= "a" || char <= "z")
    {
        return 
    }
    else
    {
        return char.toLowerCase()
    }
}

function pallindrome(str)
{
    // base case
    if(str.length == 1) return true

    // proccesing
    if(toLower(str[0])!=toLower(str[str.length-1]))
    {
        return false
    }

    // recursive

    return pallindrome(str.slice(1 , -1))
}

console.log(pallindrome("ReFER"))


// iterative case 

function pall(str)
{
    let i = 0;
    let j = 0;

    while(i<j)
    {
        if(toLower(str[i])!==toLower(str[j]))
        {
            return false
        }

        i++
        j--
    }

    return true
}

console.log(pall("Refer"))



function rightWrong(char)
{
    if((char >= "a" && char <= "z") || (char >= "A" && char <="Z") || (char >= "0" && char <= "9"))
    {
        return true
    }

    return false
}

function pal(str)
{
    let i = 0
    let j = str.length-1

    while(i<j)
    {
        while(!rightWrong(str[i]) && i<j)
        {
            i++
        }
        while(!rightWrong(str[j]) && i<j)
        {
            j--
        }

        if(toLower(str[i]) != toLower(str[j]))
        {
            return false
        }

        i++
        j--
    }

    return true
}

console.log(pal("A1b22Ba"))


console.log(rightWrong("25"))
//https://leetcode.com/problems/valid-palindrome/description/