
function factorial(n)
{
    let product = 1 ;

    for(let i = n ; i>=1 ; i--)
    {
        product*=i
    }
    return product
}


function combination(n,r)
{
    let numrator = factorial(n)
    let denominator = factorial(r) * factorial(n-r)

    console.log(numrator , denominator)

    return numrator/denominator
}

console.log(combination(5,3))


function game(arr , k)
{
    let i = 0;
    let j = 0;

    let product = 1;
    let max =  -Infinity

    let start = -1;
    let end   = -1


    while(j<arr.length)
    {
        
        product*=arr[j]

        if(arr[j] == 0)
        {
            if(product > max)
            {
                max = product;
                start = i;
                end = j
            }

            product = 1;
            j++;
            i = j
            continue;
        }

        if((j-i+1) < k) j++;

        else if ((j-i+1) == k )
        {
            if(product > max)
            {
               max = product
               start = i;
               end   = j
            }
            
            product/=arr[i]
            i++
            j++
        }
    }
    console.log(start  , end)
    return max
}

console.log(game([-5,3,2,0,12,-4,-15],3))

