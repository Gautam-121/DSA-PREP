// T.C --> O(N)

function max(arr) {

    let max = -Infinity;

    for(let i = 0 ;i<arr.length ; i++) {

        max = Math.max(arr[i], max)
    }

    return max
}

function min (arr) {

    let min = Infinity;

    for(let i = 0 ;i<arr.length ; i++) {

        min = Math.min(arr[i], min)
    }

    return min
}

console.log(max([55,-8557,1,0,482])) 
console.log(min([55,-8557,1,0,482]))




