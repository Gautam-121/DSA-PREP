var searchMatrix = function(matrix, target) {
    
    for(let i = 0 ;i<matrix.length ; i++) {
        
        let index = matrix[i]
        
        for(let j = 0 ;j<index.length ; j++) {    // T.C ==> O(N^2)
            
            if(index[j] == target) {
                return true
            }
        }
    }
    return false
};

var searchMatrix = function(matrix, target) {
    
    for(let i = 0 ;i<matrix.length ; i++) {
        
        let index = matrix[i]

        let s = 0;
        let e = index.length - 1 ;
        let mid = Math.floor(s + (e-s)/2)

        while(s<=e) {

            if(index[mid] == target) {
                return true
            }else if(index[mid] < target) {  // O(NlogM)
                s = mid + 1
            }else {
                e = mid - 1
            }
        }
        
    }  
    return false
};

// var searchMatrix = function(matrix, target) {
    
//     let n = matrix.length;
//     let m = matrix[0].length;

//     let lo = 0;
//     let hi = (n*m) - 1;

//     let mid = Math.floor(lo + (hi - lo)/2)

//     while(lo<=hi) {

//         if(matrix[(mid/)])
//     }
// };


// Frequency Counter Method;


function checkSquare(arr1,arr2) {

    if(arr1.length !== arr2.length) return false;

    let obj1 = {}
    let obj2 = {}

    for(let i=0 ;i<arr1.length ; i++) {
        
        if(obj1[arr1[i]]) {
            obj1[arr1[i]]+=1
        }else{
            obj1[arr1[i]] = 1
        }
    }
    
    for(let i=0 ;i<arr2.length ; i++) {
        
        if(obj2[arr2[i]]) {
            obj2[arr2[i]]+=1
        }else{
            obj2[arr2[i]] = 1
        }
    }

    console.log(obj1 , obj2)

    for(let i=0 ;i<arr1.length ; i++) {

        if(obj2[arr1[i]**2] && (obj1[arr1[i]] == obj2[arr1[i]**2])){
            continue;
        }else{
            return false
        }
    }


    return true

}

let arr1 = [1 ,2, 2 ,4 ,8];
let arr2 =  [4, 16, 1, 4, 64]


console.log(checkSquare(arr1, arr2))



function checkSquare1(arr1,arr2) {

    if(arr1.length !== arr2.length) return false;

    let obj1 = {}

    for(let i=0 ;i<arr1.length ; i++) {
        
        if(obj1[arr1[i]]) {
            obj1[arr1[i]]+=1
        }else{
            obj1[arr1[i]] = 1
        }
    }
    
    for(let i=0 ; i<arr2.length ;i++) {

        console.log(obj1)

        if(obj1[Math.sqrt(arr2[i])]) {
              
            obj1[Math.sqrt(arr2[i])]-=1;

            if(obj1[Math.sqrt(arr2[i])] == 0) {
                delete obj1[Math.sqrt(arr2[i])]
            }

        }else{
            return false
        }
    }

    console.log(obj1)

    return true

}


let arr13 = [1 ,2, 2 ,4 ,8];
let arr14 =  [4, 16, 1, 4, 64]


console.log(checkSquare1(arr13, arr14))
