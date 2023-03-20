function saysDigit(n)
{
    // base case 
    if(n==0) return ;

    let digit = n%10
    n = Math.floor(n/10)

    saysDigit(n)
    console.log(arr[digit])
}

let arr = ["Zero" , "One" , "Two" , "Three" ,"Four" , "Five" ,"Six" , "Seven" , "Eight" , "Nine" ]

saysDigit(412 , arr)




