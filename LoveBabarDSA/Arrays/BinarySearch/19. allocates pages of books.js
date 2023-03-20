// allocate pages of book

//Function to find minimum number of pages.

// Tc --> O(NlogN)  , Sc  ---> O(1)

function findPages(a, n, m)
{
    //your code here
     
    if(n<m) return -1
    
    let start = Math.max(...a)  // start contain max value in array
    
    let end = 0;  
    
    let mid;
    
    for(let  i = 0 ; i<n ; i++) { // end contain sum of array
        
        end+=a[i]
    }
    
    let result  = -1 // if no any matches formed for allocation return -1
    
    function isValid(arr , size , k , mx) {    // check the pages found for allocation is valid permutation or not
        
        let stuCount = 1;   // at least one book allocated at each student
        let sum      = 0;
        
        for(let i = 0 ; i<size ; i++) {
            
            sum+=arr[i];
            
            if(sum > mx) {  // if sum is greater than maximum pages allocation , then student count increases
                 
                stuCount++;
                sum = arr[i]
            }
            
            if(stuCount > k) return false
        } 
        
        return true
    }
    
    while(start<=end) {
        
        mid = Math.floor(start + (end - start)/2)  // mid --> maximum number of pages allocated
         
        if( isValid(a, n , m , mid ) == true) {  // pages found for allocation is valid or not ,if Yes
            
            result = mid;  // one valid answer but allocate minimum number of all permutation of maximum value
            end = mid - 1    // find minimum nuber of pages allocation
        }
        else {  // If No
            
            start = mid + 1  // This is not valid page allocation check another higher value
        }
    }
    
    return result
}

console.log(findPages())


