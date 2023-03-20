// Brute Force == TC  == O(N^2)


function maxProductOfSubArrays(arr , k) {

    let maxProduct = -Infinity

    for(let i = 0 ;i<=arr.length-k ; i++) {

        let currentProduct = 1

        for(let j = i ; j<i+k ; j++) {

              currentProduct*=arr[j]
        }
        
        maxProduct = Math.max(maxProduct , currentProduct)
    }
    
    return maxProduct
}

console.log(maxProductOfSubArrays([-5,3,2,0,12,-4,-15],3))


// Sliding Window Concept ; O(N)


  /*

sliding window approch , start i ans j pointer from , 0-th index;

let product = 1

while(j<arr.length)

   product*=arr[j]

// One special case if zero appers

I) --> if arr[j] == 0 at any point j appers zero , then comapre the product with max and initiallised product = 1 , j++ and  i = j continue;

if(arr[j] == 0)
{
    max = Math.max(product , max)
    
    product = 1;
    j++
    i = j
    continue;
}

calculate product upto "window" size less than "k"

like if (j-i+1 < k) j++

once window size meet k , stored  "ans" ,  decrease product by ith pointer value and moves i ponter by one postion ahead

else if(j-i+1 == k)
{
    // 1 --> store ans max = Math.max( max , product)
    // 2 --> decrease product , product/=arr[i]
    // 3 --> increase i++ , j++
}

*/

function maxProductOfSubArrays(arr , k)
{
    let i = 0;
    let j = 0;

    let product = 1;
    let max =  -Infinity

    let start = -1;
    let end   = -1;


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

console.log(maxProductOfSubArrays([-5,3,2,0,12,-4,-15],3))
