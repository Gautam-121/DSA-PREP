/*

Given an array arr[] denoting heights of N towers and a positive integer K.

For each tower, you must perform exactly one of the following operations exactly once.

Increase the height of the tower by K
Decrease the height of the tower by K
Find out the minimum possible difference between the height of the shortest and tallest towers after you have modified each tower.

You can find a slight modification of the problem here.
Note: It is compulsory to increase or decrease the height by K for each tower. After the operation, the resultant array should not contain any negative integers.


Example 1:

Input:
K = 2, N = 4
Arr[] = {1, 5, 8, 10}  // 
Output:
5
Explanation:
The array can be modified as 
{3, 3, 6, 8}. The difference between 
the largest and the smallest is 8-3 = 5.
Example 2:

Input:
K = 3, N = 5
Arr[] = {3, 9, 12, 16, 20}
Output:
11
Explanation:
The array can be modified as
{6, 12, 9, 13, 17}. The difference between 
the largest and the smallest is 17-6 = 11. 

Your Task:
You don't need to read input or print anything. Your task is to complete the function getMinDiff() which takes the arr[], n, and k as input parameters and returns an integer denoting the minimum difference.


Expected Time Complexity: O(N*logN)
Expected Auxiliary Space: O(1)

Constraints
1 ≤ K ≤ 104
1 ≤ N ≤ 105
1 ≤ Arr[i] ≤ 10

*/

/*

arr--> [3 , 9 , 12 , 16 , 20] , k = 3

initial Max Diff of tallest And shortest --> last - first  --> 20 - 3 --> 17 

Next task increase the height of tower by k or decrease by k , then fin minimum height differnce 

i.e if we increase smallest tower height and decrease tallest tower heigth you get some result

like --> smallest --> 3 + 3 ==> 6  , tallest --> 20 - 3 ==> 17   difference --> 17 - 6 --> 11

but if we seen adjecent element give minimum difference , that means we have increase our  x y

we increase value of x by k , becausse we want after performing operation x+k get max 

we decrease value of y by k , beacause we want after performing operation y-k get min

that why we comapare (arr[0] + k , y - k) for(let  i = 1 ; i<arr.length ; i++) , i = 1 ; arr[i] ==> y , arr[i-1] ==> x

ans comapre (arr[n-1] - k , x + k )

[3,9,12,16,20] x=> increase that means upto x all value increase x point 12
               y ==> decrease that means after y all value decrease y  point 16
[6,12,15,13,17]

*/



function getMinDiff(arr , k) {

    arr.sort((a,b) => a-b)

    let result = arr[arr.length - 1] - arr[0]  // b-a

    let min;
    let max;

    for(let  i = 1 ; i<arr.length ; i++) {

// arr[i-1] ==> x  (x + k) comapare with max  max ==> arr[n-1]   ==> isko ghatana hai }====? To get  arr[n-1] - k
// arr[i] ==> y    (y-k)   comapare with min      ==> arr[0]     ==> iskp bdana hai   }====? min diff arr[0] + k

    if(arr[i] >=k ) {  // If arr[i] < k  if k = 3  , arr[i] ==>  2  , 2 - 3 ==> -1 , Overall max - min increase 
                       // But i want to decrease so  obly if arr[i] >=k then go for it
       min = Math.min((arr[0] + k) , (arr[i] -k))
       max = Math.max((arr[arr.length - 1] - k) , arr[i-1] + k)
    }
    
    result = Math.min(result , (max - min))
    }

    return result
}

console.log(getMinDiff([3, 9, 12, 16, 20] , 3))




function height(arr){

    arr.sort((a,b)=>a-b)

    let minHeight = arr[0] - arr[arr.length-1]

    let max;
    let min;

    for(let i = 1; i<arr.length ; i++){

        if(arr[i] >= 0 ){

            max = Math.max(arr[i-1]+k , arr[arr.length-1]-k)
            min = Math.min(arr[i]-k , arr[0]+k)

            minHeight = Math.min(minHeight , max - min)
        }
    }

    return minHeight
}















function maxh(arr,k) {

    let maxi = arr[arr.length-1] - arr[0]

    let min;
    let max;

    for(let  i=1 ; i<arr.length ; i++) {
        
        if(arr[i]-k > 0) {
           
            min = Math.min(arr[0]+k , arr[i]-k)
            max = Math.max(arr[arr.length-1]-k , arr[i]+k ) 

            maxi = Math.min(maxi , max-min)

        }
    }
    return maxi
}

console.log(maxh([3, 9, 12, 16, 20] , 3))