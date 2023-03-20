// Brute Force , TC --> O(n^2)  , Sc --> O(1)
// using set , Tc --> O(n) , Sc(n)



function doUnion(a,  b,){ // sorted + unsorted 
    // code here
    
    let set = new Set()
        
        for(let i=0; i<a.length; i++) {
            set.add(a[i])
        }
        
        for(let j=0 ;j<b.length ; j++) {
            set.add(b[j])
        }
        
        return set

}

console.log(doUnion([1,2,2,3,3,4,4,5,7,90,41],[3,4,4,5,5,6,7,8,74,85,45,12])) //[1,2,3,4,5,6,7,8,74,85,45,12,90,14]

function union(arr1 ,arr2) {

    function next_Distinct(arr , i) {

        while(i<arr.length && arr[i] == arr[i+1]) {
            i++
        }
        return i
    }

    let i = 0;
    let j = 0;

    let arr3 = []

    while(i<arr1.length && j<arr2.length) {

        if(arr1[i] < arr2[j]) {

            arr3.push(arr1[i])

           i = next_Distinct(arr1 ,i)
           i++

        }
        else if(arr1[i] > arr2[j]) {

            arr3.push(arr2[j])

            j = next_Distinct(arr2 ,j)
            j++
        }
        else{

            arr3.push(arr2[j])
            i = next_Distinct(arr1 ,i)
            j = next_Distinct(arr2 ,j)
            i++
            j++
        }

    }

    while(i<arr1.length) {

        arr3.push(arr1[i])
        i = next_Distinct(arr1 ,i)
        i++
    }
    while(j<arr2.length) {

        arr3.push(arr2[j])
        j = next_Distinct(arr2 ,j)
        j++
    }

    return arr3
}

console.log(union([1,2,2,3,3,4,4,5,7,90,41],[3,4,4,5,5,6,7,8,74,85,45,12])) //[1,2,3,4,5,6,7,8,74,85,45,12,90,14]












function next_Distint(arr , i){

    while(i<arr.length-1 && arr[i] == arr[i+1]) i++

    return i
}


