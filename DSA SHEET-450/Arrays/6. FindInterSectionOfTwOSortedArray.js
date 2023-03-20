
// Brute Force -- > Tc -> O(N^2)  , Sc --> O(1)
function IntersectionOfTwoSortedArrays(arr1 , arr2) {
    
    let newArr = []
    for(let i = 0 ;i<arr1.length ; i++) {
        for(j = 0 ; j<arr2.length ; j++) {
            if(arr1[i]==arr2[j]) {
                newArr.push(arr1[i])
                arr2[j] = -2
                break;
            }
        }
    }
    return newArr
}

console.log(IntersectionOfTwoSortedArrays([1,2,2,2,3,4,5],[2,2,,2,2,2,2,3,4]))

// Tc --> O(n) , Sc --> O(1)

function IntersectionOfTwoSortedArrays1(arr1 , arr2) {

    let i = 0 ;
    let j = 0;
    let mergeArr = []

    while(i<arr1.length && j<arr2.length) {
        if(arr1[i] == arr2[j]) {
        mergeArr.push(arr1[i])
        i++;
        j++
        }
        else if(arr1[i]<arr2[j]) {
            i++
        }else{
            j++
        }
    }
    return mergeArr
}

console.log(IntersectionOfTwoSortedArrays1([1,2,2,2,3,4,5],[2,2,2,2,2,2,3,4]))  





