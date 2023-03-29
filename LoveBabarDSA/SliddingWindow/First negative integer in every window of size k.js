
// Brute force Tc --> O((n-k) * k) Sc --> O(1)

/*

[12,-1,-7,8,-15,30,16,28] , k = 3   ans => [-1,-1,-7,-15,-15,0]
                 i
take for loop upto --> arr.length-k , in this case k = 3 , i.e i goes upto 30;

isNegative = true  // flag taken in that perticular window no negative number appear ,
in that case push "0" , ans.push(0)

take another loop to to check first negative Number in k size window , j=i , upto j<i+k  ; j++

check 
if(arr[j] < 0){
    ans.push(arr[j])
    isNegative = false
    break;
}

if(isNegative)
{
    ans.push(0)
}
    





*/

function firstnegativeintegereverywindowofsizeK(arr , k) {


    if(arr.length < k) {
        return false
    }
    
    let newArr = []

    for(let i = 0 ; i<=arr.length-k ; i++) {

        let isNegative = false

        for(let j = i ; j<i+k ; j++) {
            
            if(arr[j] < 0) {
                isNegative = true
                newArr.push(arr[j])
                break
            }

        }
        if(isNegative == false) {
            newArr.push(0)
        }
    }
    return newArr
}

 console.log(firstnegativeintegereverywindowofsizeK([12,-1,-7,8,-15,30,16,28],3))

function isNegative(arr , k)
{
    let i = 0; // Initial pointer
    let j = 0; // Initial pointer

    let negative = [] // take negative element of arry
    let ans = [] // store first negative integer of window size k

    while(j<arr.length)  // Iterate upto size "n"
    {
        if(arr[j] < 0)  // if any negative value appers push in (Negative arry)
        { 
            negative.push(arr[j])
        }

        if((j-i+1) < k)  // check window size less than k , increase j-Pointer
        {
            j++
        }
        else if((j-i+1) == k)  // window size matched
        {
            
            if(negative[0]!==undefined)  // calculation for ans stored , as i know , first negative value of window size k , appear at start index of
                                         // negative array
            {
                ans.push(negative[0])
            }
            else
            {
                ans.push(0)  // if negative arry is empty in this case push (0)
            }

            if(arr[i] == negative[0]) // Increse i-th pointer , but before moving i-th pointer check ith value present at 0-th index of negative array , 
                                    // if present before increase i-th pointer remove this element from( negative arry)
            {
                negative.shift()
            }
            i++
            j++
        }
    }
    return ans
}

console.log(isNegative([12,-1,-7,8,-15,30,16,28],3))



function firstnegativeintegereverywindowofsizeK(arr , k){

    let q = []
    let ans = []

    let i = 0;
    let j = 0;

    while(j<arr.length){

        if(arr[j] < 0) q.push(arr[j])

        if(j-i+1 < k) j++

        else
        {
            if(q.length == 0){
                ans.push(0)
            }
            else
            {
                ans.push(q[0])
            }

            if(arr[i] == q[0]){
                q.shift()
            }

            i++
            j++
        }
    }
}