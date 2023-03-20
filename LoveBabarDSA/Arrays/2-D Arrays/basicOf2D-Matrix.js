let arr = [[1,2,3] , [4,5,6] , [7,8,9]]


let rowLe = arr.length // calculate number of rows in matrix
let colLe = arr[0].length // calculate number of column in matrix

// Print row wise
console.log("Print Row wise")
for(let row = 0 ; row<3 ; row++)
{
    for(let col = 0 ; col<3 ; col++)
    {
        console.log(arr[row][col])
    }
}

console.log("Print Column wise")
// Print column wise
for(let col = 0 ; col<3 ; col++)
{
    for(let row = 0 ; row<3 ; row++)
    {
        console.log(arr[row][col])
    }
}