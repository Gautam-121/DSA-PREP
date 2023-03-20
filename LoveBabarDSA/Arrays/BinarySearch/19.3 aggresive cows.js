/*
Given a array of length N , where each element denote position of stall . Now You 
have N stall and integer K Which denotes number of cows are aggresive . To prevent house from
hunting each other , You need t assign cows to the stall , such that the minimum distance
between any two of them ,is lasrge as possible , return lasrgest minimum distance

Sample Input 1 :
2
3 2
1 2 3
5 2
4 2 1 3 6
Sample Output 1 :
2
5
Explanation To Sample Input 1 :
In the first test case, the largest minimum distance will be 2 when 2 cows 
are placed at positions {1, 3}.

In the second test case, the largest minimum distance will be 5 when 2 cows 
are placed at positions {1, 6}.
Sample Input 2 :
2
6 4
0 3 4 7 10 9
6 3
0 4 3 7 10 9
Sample Output 2 :
3
4
Explanation To Sample Input 2 :
In the first test case, the largest minimum distance will be 3 when 4 cows 
are placed at positions {0, 3, 7, 10}.

In the second test case, the largest minimum distance will be 4 when 3 cows 
are placed at positions {0, 4, 10}.
*/

function isPossible(arr , k , mid)
{
    let lastPos =  arr[0]
    let count   = 1;

    for(let i=0 ; i<arr.length ; i++)
    {
        if((arr[i] - lastPos) >= mid)
        {
            count++;
             
            if(count == k) return true // this is becouse i have arrange all k cow in distance >= mid
            lastPos = arr[i]

        }

    }

    return false
}


function aggresive(arr , k)
{
    let start  = 0
    let end    = arr[arr.length-1]
    let ans = -1

    let mid;

    while(start<=end)
    {
        mid = Math.floor( start + (end-start)/2)

        if(isPossible(arr , k , mid))
        {
            ans = mid
            start = mid + 1
        }
        else{

            end = mid - 1
        }
    }
    return ans
}

let arr = [0,3,4,7,10,9]

// first sort the arry

arr.sort((a,b) => a-b)

console.log(aggresive( arr , 4 ))