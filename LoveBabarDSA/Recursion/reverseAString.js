function reverseHelper(arr , l , r)
{
    // base case
    if(l>=r) return

    // you can do small work
    [arr[l],arr[r]] =  [arr[r],arr[l]] 

    // recursion can do remaining work
    reverseHelper(arr , l+1 , r-1)
}

function reverse( str )
{
    str = str.split("")
    reverseHelper(str , 0 , str.length-1 )

    let newStr = ""

    for(let i = 0 ; i<str.length ; i++)
    {
        newStr+=str[i]
    }
    return newStr
}

console.log(reverse("Gautam"))



function reverseHelper1(str)
{
    // base case
    if(str.length == 0) return ""

    // you can do small work
    return str[str.length-1] +  reverseHelper1(str.slice(0 , -1))
}

console.log(reverseHelper1("Guatam"))

