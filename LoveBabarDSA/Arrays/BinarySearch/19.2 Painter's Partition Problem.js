/*
Given a array/list of length N , where array represent the board and each element
of given array list represent the length of each board. Some "k" number of painter
are available to paint this board . consider each unit of board takes 1 unit of time
to paint
You supposed to return mimimum time to get this job of painting all the N boards
under a constraint that any painter that will only paint the constinuous section
of board

Sample Input 1 :
2
4 2
5 5 5 5
4 2
10 20 30 40
Sample Output 1 :
10
60
Explanation For Sample Input 1 :
In the first test case, we can divide the boards into 2 equal-sized partitions,
 so each painter gets 10 units of the board and the total time taken is 10.


In the second test case, we can divide the first 3 boards for one painter 
and the last board for the second painter.

*/

function isPossible(arr , mid , k)
{
    let count = 1;
    let sum = 0;

    for(let i = 0 ; i <arr.length ; i++)
    {
        sum+=arr[i]

        if(sum > mid)
        {
            count++
            sum = arr[i]
        }

        if(count > k) return false
    }

    return true
}

function findLargestMiNDistance(arr , k)
{

    let start = Math.max(...arr)
    let end = 0  // sum of arry

    for(let i = 0 ; i<arr.length ; i++)
    {
        end+=arr[i]
    }

    let mid;
    let ans = -1


    while(start<=end)
    {
        mid = Math.floor(start + (end - start)/2)

        if(isPossible(arr , mid , k))
        {
            ans = mid;
            end = mid-1
        }
        else
        {
            start = mid + 1
        }
    }
   
    return ans
}

let arr = [10,20,30,40]

console.log(findLargestMiNDistance(arr , 2))