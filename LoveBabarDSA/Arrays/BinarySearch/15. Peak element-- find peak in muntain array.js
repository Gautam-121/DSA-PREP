// find peak element || Find peak in mountain array

// peak element --> arr[mid] > arr[mid - 1] && arr[mid] > arr[mid + 1]

/*

1 2 1 3 5 6 4

2 || 5 is my answer

*/


function peakElement(arr) {

    let start  = 0;
    let end    = nums.length - 1;

    let mid;

    while(start<end) {
        
        mid = Math.floor(start + (end -start)/2)
        
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
            
            return mid
        }
        
        else if(nums[start] <= nums[mid]  && nums[mid] < nums[mid+1]) {
            
            start = mid + 1
        }
        else {
            end  =  mid
        }
    }
    return end
}




function peakElement(arr) {

    let start  = 0;
    let end    = arr.length - 1;

    let mid;

    while(start<end) {
        
        mid = Math.floor(start + (end -start)/2)
        
        if(nums[mid] > nums[mid-1] && nums[mid] > nums[mid+1]) {
            
            return mid
        }
        
        if(mid > 0 && mid < arr.length-1) {

            if(arr[mid - 1] > arr[mid]) {
                   
                end = mid - 1
            }
            else if( arr[mid + 1] > arr[mid]) {

                start = mid + 1
            }
            
        }
        else if (mid == 0) {
              
            if(arr[0] > arr[1]) {

                return 0
            }
            else {

                return 1
            }

        }
        else if (mid == arr.length-1) {
              
            if(arr[ arr.length-1] > arr[ arr.length-2]) {

                return arr.length-1
            }
            else {

                return arr.length-2
            }

        }
    }
}