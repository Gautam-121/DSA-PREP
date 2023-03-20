// Find position of an element in a sorted array of infinite numbers

/*

Suppose you have a sorted array of infinite numbers, how would you search an element in the array?
Source: Amazon Interview Experience. 
Since array is sorted, the first thing clicks into mind is binary search, but the problem here is that we don’t know size of array. 
If the array is infinite, that means we don’t have proper bounds to apply binary search. So in order to find position of key, first we find bounds and then apply binary search algorithm.
Let low be pointing to 1st element and high pointing to 2nd element of array, Now compare key with high index element, 
->if it is greater than high index element then copy high index in low index and double the high index. 
->if it is smaller, then apply binary search on high and low indices found. 
 
*/

function findInfiniteSortedArray(arr , target) {


    let start = 0;
    let end   = 1

    // search space where my target exist

    while(target > arr[end]) {

        start = end
        end = end * 2
    }

    let mid;

    while(start<=end) {

        mid  = Math.floor( start + (end - start)/2)

        if(arr[mid] == target) return mid;

        else if ( arr[mid] > target) 
           end = mid - 1
        
        else if ( arr[mid] < target)
           start = mid + 1
    }

    return -1
}

console.log(findInfiniteSortedArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16] , 8))

function InfiniteArraySearch(arr)
{
    let start = 0 ;
    let end   = 1;


    // find search space were my answer lies

    while(target > arr[end])
    {
        start  = end;
        end    = end * 2
    }

    let mid;

    while(start <=end)
    {
       mid = Math.floor( start + (end-start)/2)

       if(arr[mid] == target)
          return mid;
       else if(arr[mid] > target)
          end = mid - 1
       else if (arr[mid] < target)
          start = mid + 1
    }

    return  -1
}