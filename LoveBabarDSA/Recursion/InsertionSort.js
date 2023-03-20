function insertionSort(arr ,i)
{
    console.log(arr , i)
    // base case
    if(i == arr.length) return

    // sort, using shift
    let j = i - 1;
    let temp = arr[i]
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

    arr[j+1] = temp;

    // recursively , you can done remainning work
    insertionSort(arr , i+1)
}

let arr = [4, 1, 3, 9, 7]

insertionSort(arr , 1)

console.log(arr)