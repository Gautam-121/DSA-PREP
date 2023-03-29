// Find minimum difference element in sorted array

// if key present then minimum difference element in key

// if not present then closest element of key in sorted array

/*

if present 

1 3 8 10 12 15 18      key  = 12

diff --> 11 9 4 2 0 3 6  ----> 0 is minimum diifrence --> represent value 12


if not present 

1 3 8 10  15 18      key  = 12
        12        0
diff --> 11 9 4 2   3 6   that means closest element of 12 give minimum difference eigther 10 or 15

12 - 10 --> 2   
15 - 12 --> 3

that means 10 is minimum difference element

*/

function minimumDifferenceElement(arr , target) {


    let start = 0;
    let end   = arr.length - 1;

    let mid;

    while(start<=end) {

        mid = Math.floor(start + (end  - start)/2)

        if(arr[mid] == target) return arr[mid]

        else if (target > arr[mid]) 
           start = mid  + 1
        
        else if (target < arr[mid])
          end  = mid - 1
    }

    if(start == arr.length)
    {
        return arr[end]
    }

    if(end == -1)
    {
        return arr[start]
    }


    let low  = Math.abs(target - arr[start])
    let high = Math.abs(target - arr[end])

    if(low <= high) {
        return arr[start]
    }
    else {
        return arr[end]
    }
}

console.log(minimumDifferenceElement([1,3,8,10,15,16,18] , 12))




