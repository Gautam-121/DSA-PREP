/*

1 2 4 5
3 6 8 10
11 12 13 15
16 14 9 7

output --> 1 3 11 16 14 12 6 2 4 8 13 9 7 15 10 5 

Here, the elements are printed in a form of a wave, first, the 0th column is printed from top 
to bottom then the 1st column from bottom to top, and so on. Basically, the even column is printed 
from top to bottom and the odd column in the opposite direction.
*/

// approch even-Index-col --> Print TopToBotoom
// odd-Index-Col --> Print bottomToTop

function wavePrint(arr)
{
    let ans = []
    for(let col=0 ; col<arr[0].length ; col++)
    {
        if(col&1)
        {
            // Odd Index Column
            let temp = []
            for(let row = arr.length-1 ; row>=0 ; row--)
            {
                temp.push(arr[row][col])
            }
            ans.push(temp)
        }
        else
        {
            // Even Index Column
            let temp = []
            for(let row=0 ; row<arr.length ; row++)
            {
                temp.push(arr[row][col])
            }
            ans.push(temp)
        }
    }
    return ans
}

console.log(wavePrint([[1,2,3],[4,5,6],[7,8,9]]))