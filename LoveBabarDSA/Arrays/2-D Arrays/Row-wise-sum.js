function RowWiseSum(arr)
{
    let rIndex = -1
    let maxi = -Infinity

    for(let row=0 ; row<arr.length; row++)
    {
        let sum = 0

        for(let col= 0 ; col<arr[0].length ; col++)
        {
            sum+=arr[row][col]
        }

        if(sum > maxi) 
        {
            maxi = sum
            rIndex = row
        }
    }
    console.log(rIndex)
}

console.log("Row-Wise-Sum")
RowWiseSum([[1,2,3],[7,8,9],[4,5,6]])

function ColWiseSum(arr)
{
    let CIndex = -1
    let maxi = -Infinity

    for(let col=0 ; col<arr[0].length; col++)
    {
        let sum = 0

        for(let row= 0 ; row<arr.length ; row++)
        {
            sum+=arr[row][col]
        }

        if(sum > maxi) 
        {
            maxi = sum
            CIndex = col
        }
    }
    console.log(CIndex)
}

console.log("Col-Wise-Sum")
ColWiseSum([[1,2,3],[4,5,6],[7,8,9]])
