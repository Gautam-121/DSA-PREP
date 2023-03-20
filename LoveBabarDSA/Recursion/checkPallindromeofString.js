function lowerCase( char )
{
    if(char >="a" && char <= "z") return char
    return char.toLowerCase()
}

function pallindrome(  str , l , r )
{
    // base case 
    if(l>=r) return 1

    //recursion
    if(lowerCase(str[l]) !== lowerCase(str[r])) return -1
    return pallindrome( str , l+1 , r-1)
}

let str = "Rambo"
let l = 0;
let r = str.length-1
console.log(pallindrome( str, l , r))