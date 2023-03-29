// find all pair whose sum is equal to target

// condition -->  1)  Tc --> O(nlogn)
//                2)   (a1,b1) , (a2,b2) , ....
//                3)   a1<a2<a3<a4<a5 ........  && b1>b2>b3............
//                4)   (2,8)one value dont write (8,2)


function pairSum(arr , k) {

    arr.sort((a,b) => a-b)

    let  i = 0;
    let  j = arr.length - 1;

    while(i<j) {

        if(arr[i] + arr[j] == k) {
            console.log(arr[i] , arr[j])
            i++;
            j--
        }
        else if(arr[i] + arr[j] > k) {
               j--
        }
        if(arr[i] + arr[j] < k) {
            i++
        }
    }
}
(pairSum([7,15,3,18,6,4,19,2,12,11,9] , 15))
