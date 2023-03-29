// number of times sorted array rotated;

// find minimum value of array ---> Their index value is called number of times of rotation

// ----> all Element are distinct

function minimum(arr) 
{

    if(arr[0] < arr[arr.length-1])
      return arr[0]
    
    let start  = 0;
    let end    = arr.length-1

    let mid;

    while(start<=end)
    {
        mid = Math.floor(start + (end - start)/2)

        if(arr[mid] > arr[end])
        {
            start  = mid + 1
        }
        else
        {
            end  = mid
        }
    }
    
    return arr[start]
}

// Duplicate element are present --> 

function minimum(arr) 
{

    if(arr[0] < arr[arr.length-1])
      return arr[0]
    
    let start  = 0;
    let end    = arr.length-1

    let mid;

    while(start<=end)
    {
        mid = Math.floor(start + (end - start)/2)

        if(arr[mid] > arr[arr.length-1]) // if mid present left sorted area
        {
            start  = mid + 1
        }
        else if(arr[mid] < arr[arr.length-1]) // if mid present right sorted area
        { 
            end  = mid
        }
        else // if duplicate , then decrease search space
        {
            end--
        }
    }
    
    return arr[start]
}



















