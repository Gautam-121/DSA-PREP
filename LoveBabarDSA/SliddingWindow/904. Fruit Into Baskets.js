/*

You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.

You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:

You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
Given the integer array fruits, return the maximum number of fruits you can pick.

 

Example 1:

Input: fruits = [1,2,1]
Output: 3
Explanation: We can pick from all 3 trees.

*/




var totalFruit = function(fruits) {
     
    if(fruits.length == 1) {
        return 1
    }
    
    let obj = {}
    
    let i = 0;
    let j = 0;
    let count = 0;
    let max = 0 ;
    
    while(j<fruits.length) {
        
        if(obj[fruits[j]]) {
            (obj[fruits[j]])+=1
        }
        else{
            (obj[fruits[j]]) = 1;
             count++
        }
        
        if(count == 2) {
            max = Math.max(max , (j-i+1))
            j++
        }
        else if(count < 2) {
            j++
        }
        else if(count > 2) {
            
            while(count > 2) {
                if(obj[fruits[i]]) {
                    obj[fruits[i]]-=1
                    if(obj[fruits[i]] == 0) {
                        delete obj[fruits[i]]
                        count--
                    }
                }
                i++
            }
            j++
        }
        
    }
    if(count == 1) {
        return obj[fruits[0]]
    }
    return max  
};

