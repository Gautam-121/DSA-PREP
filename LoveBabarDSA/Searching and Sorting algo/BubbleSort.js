//  At each iteration largest element shift to the right side

// If n element , (n-1) iteration take place 

function bubbleSort(arr) {

    let count = 0

    for(let i = 1 ; i<=arr.length-1 ; i++) { // n = 5 , iteration 4  , arr.length-1 ==> 4 , i =>   1 , 2 , 3 , 4
       
       let  isEnter = true

        for(let  j = 0 ; j<arr.length-i ; j++) {

            if(arr[j] > arr[j+1]) {  
                 
                [arr[j] , arr[j+1]] = [arr[j+1] , arr[j]]
                isEnter = false

                count+=2

            }
        }
        if(isEnter)
        {
            break;
        }
    }

    console.log(count)

    return arr
}

console.log(bubbleSort([5, 4, 1, 3, 2, 6]))



function bulbb(arr)
{
    let count = 0

    for(let i = 0; i<arr.length-1 ; i++)
    {
        isEnter = false

        for(let j = 1 ; j<arr.length-i ; j++)
        {
            if(arr[j-1] > arr[j])
            {
                swap()
                count +=2
                isEnter = false
            }
        }
        if(isEnter) break
    }
}

















