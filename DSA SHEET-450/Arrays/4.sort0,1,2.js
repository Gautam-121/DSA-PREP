// Brute Force  --- Tc -- (NlogN) , Sc --> O(1)

// Two Pointer  ---- Tc -- O(N)   , sc ---> O(1)


// O to low-1 ---> 0 0 0 0 0
// low to mid-1 ---> 1 1 1 1 
// high+1 to end ---> 2 2 2 2


function sortThird(arr) {

    let low = 0;
    let mid = 0;
    let high = arr.length - 1;

    while(mid<=high) {

        switch(arr[mid]){
            
            case 0 : {
                [arr[low++],arr[mid++]] = [arr[mid],arr[low]]
            }
            break;

            case 1 : {
                mid++
            }
            break;

            case 2 : {
                [arr[mid] , arr[high]] =  [arr[high] , arr[mid]]
                high--
            }
        }
    }
    return arr
}

let arr = [0,1,2,1,1,0,1,2,0,1]

console.log(sortThird(arr))



