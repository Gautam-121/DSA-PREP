// extention of 560;


// Longest SubArray having equal no 0,1,2

function longestSubequal0s1s2s(arr) {

    let map = new Map()

    let ans = 0;

    let countZe = 0;
    let countOn = 0;
    let countTw = 0;

    let delta10 =  countOn - countZe
    let delta21 =  countTw - countOn

    let key = delta10 + "#" + delta21

    map.set(key , -1)

    for(let i = 0 ; i<arr.length ; i++) {

        if(arr[i] == 0) countZe++
        else if(arr[i] == 1) countOn++
        else countTw++

        delta10 =  countOn - countZe
        delta21 =  countTw - countOn

        key = delta10 + "#" + delta21

        if(map.has(key)) {

            let length = i - map.get(key)

            if(length > ans) ans = length ;

        }else {

            map.set(key , i)
        }  
    }
    return ans
}



console.log(longestSubequal0s1s2s([1,1,2,0,1,0,1,2,1,2,2,0,1]))

// count all SubArrays having equal No 0 , 1 , 2

function countSubequal0s1s2s(arr) {

    let map = new Map()

    let ans = 0;

    let countZe = 0;
    let countOn = 0;
    let countTw = 0;

    let delta10 =  countOn - countZe
    let delta21 =  countTw - countOn

    let key = delta10 + "#" + delta21

    map.set(key , 1)

    for(let i = 0 ; i<arr.length ; i++) {

        if(arr[i] == 0) countZe++
        else if(arr[i] == 1) countOn++
        else countTw++

        delta10 =  countOn - countZe
        delta21 =  countTw - countOn

        key = delta10 + "#" + delta21

        if(map.has(key)) {

            ans+=map.get(key)

            map.set(key , map.get(key) + 1)

        }else {

            map.set(key , 1)
        }  
    }
    return ans
}

console.log(countSubequal0s1s2s([1,1,2,0,1,0,1,2,1,2,2,0,1]))