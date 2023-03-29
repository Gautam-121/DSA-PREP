// Using merge sort write count inversion

let count  = 0

function merge( arr , start , end , mid )
{
    let len1 = mid - start + 1 // length of left side of array including mid
    let len2 = end - mid // length of right side of array

    let leftArr = new Array(len1)
    let rightArr = new Array(len2)

    leftArr.fill(0)
    rightArr.fill(0)

    let k = start // denoting main Index

    for(let i = 0 ; i<len1 ; i++) //Adding the left side element of main array into leftArray
    {
        leftArr[i] = arr[k++]
    }

    for(let i = 0 ; i<len2 ; i++) //Adding the right side element of main array into rightArray
    {
        rightArr[i] = arr[k++]
    }

    let i = 0 // Index of leftArray
    let j = 0; // IndexOf RightArray
    k = start; // Index oF mainArray

    while(i<len1 && j<len2) //This is for compairing the elements of Left Array and Right Array So that we can
    {                        //decide which element to put in the main array
       
        if(leftArr[i] < rightArr[j])
        {
            arr[k] = leftArr[i++]
        }
        else
        {
            count+=(len1 -i)
            arr[k] = rightArr[j++]
        }

        k++
    }

    while(i<len1)  //If after comparing the elements of both array , elements in the leftArr will be left out then we will simply 
    {               //put that elemets the main array
        arr[k++] = leftArr[i++]
    }

    while(j<len2)  //If after comparing the elements of both array , elements in the rightArr will be left out then we will simply 
    {              //put that elemets the main array
        arr[k++] = rightArr[j++]
    }
}

function mergeSort( arr , start , end , count)
{
    if(start >= end) return 

// step-1 Find mid , for Divide the array
   let mid = Math.floor(start + (end - start)/2)

   // recursion for left side

   mergeSort(arr , start , mid)

   // recursion for right sir

   mergeSort(arr , mid+1 , end)

   // Merge The array

   merge( arr , start , end , mid)


}

let arr = [2, 4, 1, 3, 5]
mergeSort(arr, 0, arr.length - 1 , count)
console.log(count)
console.log(arr)
console.log(ans)


//TC==> O(N log N)




class Solution {
    constructor(){
        //Counter to keep the count of inversions.
        this.my_counter = 0;
    }
    
    // p: initial point in the array, say left index
    // q: mid point
    // r: higher range
    //Function to sort and merge two parts of array.
    merge(a, p, q, r){
        let l = q-p+1;
        
        let a1 = new Array(l);
    
        let l2 = r-q;
        
        let a2 = new Array(l2);
        
        //Storing elements present in left half in the array a1.
        for(let i = 0; i < l; i++){
            a1[i] = a[i+p];
        }
        //Storing elements present in right half in the array a2.
        for(let i = 0; i < l2; i++){
            a2[i] = a[q+i+1];
        }
        
        let left = 0, right = 0, k = p;
        
        //Using two pointers over the two arrays which helps in storing the
        //smaller element and thus merging the array.
        while(left < l && right < l2)
        {
            //Comparing element of the arrays a1 and a2 at pointers left and 
            //right and accordingly storing the smaller element and updating 
            //the pointers.
            if(a1[left] <= a2[right]){
                a[k] = a1[left];
                left++;
            }
            else{
                a[k] = a2[right];
                right++;
                
                //Adding the inversions which is the number of elements which 
                //are smaller than a2[right] in the a1 array.
                this.my_counter += (l-left);
            }
            k++;
        }
        
        //Storing  the remaining elements of left subarray(if there are any)
        //in the array a1.
        while(left < l){
            a[k++] = a1[left++];
          
        }
        
        //Storing the remaining elements of right subarray(if there are any)
        //in the array a2.
        while(right < l2){
            
            a[k++] = a2[right++];
        }
    }
        
    //Function to mergesort the array, which uses divide and conquer algorithm
    //on left and right halves of array for mergesort operation.
    mergeSort(a, p, r)
    {
        if(p < r)
        {
            let q = Math.floor((p+r)/2);
            
            //Calling recursive function to sort left half of the array.
            this.mergeSort(a, p, q);
            
            //Calling recursive function to sort right half of the array.
            this.mergeSort(a, q+1, r);
            
            //Calling merge function which sorts and merges both halves
            //of the array obtained after calling both recursive function.
            this.merge(a, p, q, r);
        }
    }    
    
    // Function to count inversions in the array.
    inversionCount(arr, N)
    {
        this.mergeSort(arr, 0, N-1);
        //returning the count of inversions in the array.
        return this.my_counter;
    }
}













function mergeTwoSorted(arr , start , end , mid){

    let length1 = mid - start + 1 // mid including to left side of arr
    let length2 = end - mid

    let arr1 = new Array().fill(0)
    let arr2 = new Array().fill(0)

    let i = 0;
    let k = start

    while(i<length1){
        arr[i++] = arr[k++]
    }

    let j = 0

    while(j<length2){
        arr[j++] = arr[k++]
    }

    i = 0;
    j = 0;
    k = start

    while(i<length1 && j<length2){

        if(arr[i]<=arr[j]){
            arr[k] = arr[i++]
        }
        else{
            count+=length1 - i
            arr[k] = arr[j++]
        }

        k++
    }

    while(i<length1){
        arr[k++] = arr[i++]
    }

    while(j<length2){
        arr[k++] = arr[j++]
    }
}






function mergeSort(arr , start , end){

    if(start >= end) return

    let mid =  Math.floor(start + (end - start)/2)

    //left part sambal na hai
    mergeSort(arr , start , mid)

    //right part ko smabal le
    mergeSort(arr , mid+1 , end)

    //merge Both the arr
    mergeTwoSorted(arr . start , end , mid)
}
















/*

Wizard-Land can be represented as infinite line with coordinates....., -3, -2, -1, 0, 1, 2, 3 ... and so on. 
Amy teaches in a school with N
batches of students. Ai denotes the number of students in the ith batch.
Amy has to choose one coordinate as school and one coordinate for each batch of students as their hostel. 
Students of same batch lives in one hostel. All the N+1, coordinates chosen by her must be distinct.

Each morning students walks from their hostel to the school.
 If the student's hostel is at coordinate XH and school is at coordinate Xs, 
 then he travels | XS-XH | units of distance. She wants to assign these N+1, 
 coordinates such that total distance travelled by each student to reach the school in morning is minimized. 
 Find the minimum total distance. You are given T independent test cases.

Constraints
1 <= T <= 10 1 <= N <= 105
0 <= A¡ <= 105


*/





