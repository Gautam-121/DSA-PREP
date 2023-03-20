function power(a,b)
{
    let product = 1

    for(let i=1 ; i<=b ; i++)
    {
        product*=a
    }
    return product
}

console.log(power(2,4))