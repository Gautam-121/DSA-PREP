// For n element , total (n-1) iteration take palce

// at each iteration comparing with previous element and swap it or break


function insertionSort(arr) {

    for(let i = 1 ; i<arr.length ; i++) {

        let temp = arr[i]
        let j = i-1 

        for(;j>=0 ; j--) {

            if(arr[j] > temp) {

                // shift , j pointer value to j+1 pointer value
                arr[j+1] = arr[j]

            }else{
                break;
            }
        }

        arr[j+1] = temp
    }
    return arr
}

console.log(insertionSort([2,5,9,1,3]))

let arr = [45,21,2,7,46,98]

for(let i = 1 ; i<arr.length; i++)
{
    let temp = arr[i]

    let j = i-1

    while(j>=0)
    {
        if(arr[j] > temp)
        {
            arr[j+1] = arr[j]
            j--
        }
        else
        {
            break;
        }
    }
    arr[j+1] = temp
}

console.log(arr)



