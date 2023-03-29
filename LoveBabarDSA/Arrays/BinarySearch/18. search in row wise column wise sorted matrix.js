/*

Search in a row-column sorted Matrix

Given a matrix of size n x m, where every row and column is sorted in increasing order, and a number x. Find whether element x is present in the matrix or not.

Example 1:

Input:
n = 3, m = 3, x = 62
matrix[][] = {{ 3, 30, 38},
              {36, 43, 60},
              {40, 51, 69}}
Output: 0
Explanation:
62 is not present in the matrix, 
so output is 0.
Example 2:

function indexFindValue(arr , target){

	let start = 0;
	let end = arr.length - 1;

	while(start <= end){

		let mid = start + end /2

		if(arr[mid][0] >= target && arr[mid][arr[mid].length -1] <= taget){
			return mid
		}
		else if(arr[mid][0] < target){
			start = mid + 1
		}
		else{
			end = mid - 1
		}
	}
}

function wal(arr , x){

	let index = indexFindValue(arr , targer)

	if(valueLies == -1) return 0;

	start = 0;
	end = arr[mid].length - 1;

	while(start < end){

		let mid = start + end /2

		if(arr[index][mid] == target){
			return 1
		}
	}

}

function 

Input:
n = 1, m = 6, x = 55
matrix[][] = {{18, 21, 27, 38, 55, 67}}
Output: 1
Explanation: 55 is present in the matrix.


Your Task:
You don't need to read input or print anything. Complete the function search() that takes n, m, x, and matrix[][] as input parameters and returns a boolean value. True if x is present in the matrix and false if it is not present.

Expected Time Complexity: O(N + M)
Expected Auxiliary Space: O(1)

Constraints:
1 <= N, M <= 1000
1 <= mat[][] <= 105
1 <= X <= 1000

*/


function search(matrix, n, m, x)

    {
    	// code here
    	
    	let i = 0;
    	let j = m-1;
    	
    	while((i>=0 && i<n) && (j>=0 && j<m)) {
    	    
    	    if(matrix[i][j] == x)
    	      return 1
    	    
    	    else if(matrix[i][j] > x) 
    	       j--
    	   
    	    else if (matrix[i][j] < x)
    	       i++
    	}
    	
    	return 0
}

console.log(search())