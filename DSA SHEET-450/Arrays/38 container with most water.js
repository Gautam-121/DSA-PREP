/*

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

*/

// brute force , tc --> O(n^2)

// approch --> Max area is largest distace * height of min(bu1 , bu2)

var maxArea = function(height) {
    
    let max = -Infinity // stored max area

    for( let i = 0 ; i<height.length ; i++)
    {
        for(let j = i+1 ; j<height.length ; j++)
        {
            let hei =  Math.min( height[i] , height[j])
            let bre = j-i

            let area = hei * bre

            max = Math.max( max , area)
        }
    }

    return max
};

var maxArea = function(height) {
    
    let i = 0 ;
    let j = height.length - 1;
 
   let water = 0;
 
   while(i<j) 
   {
       let hei = Math.min( height[i] , height[j]) // min of height of two tower
       let bre = j - i // distance between this two tower
 
       let area = hei * bre // area ==> bre * heigh
 
       water = Math.max( water , area) // update maximum water store
 
       if(height[i] < height[j]) // if height of i is smaller then increase i
       {
           i++
       }
       else // otherwise j smaller then decrease j
       {
           j--
       }
   }
   return water // return max store water
 };