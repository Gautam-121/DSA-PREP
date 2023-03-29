/*

Given two singly linked lists of size N and M, write a program to get the point where two linked lists intersect each other.

 

Example 1:

Input:
LinkList1 = 3->6->9->common
LinkList2 = 10->common
common = 15->30->NULL
Output: 15
Explanation:
Y ShapedLinked List
Example 2:



Input: 
Linked List 1 = 4->1->common
Linked List 2 = 5->6->1->common
common = 8->4->5->NULL
Output: 8
Explanation: 

4              5
|              |
1              6
 \             /
  8   -----  1 
   |
   4
   |
  5
  |
  NULL       
Your Task:
You don't need to read input or print anything. The task is to complete the function intersetPoint() which takes the pointer to the head of linklist1(head1) and linklist2(head2) as input parameters and returns data value of a node where two linked lists intersect. If linked list do not merge at any point, then it should return -1.
Challenge : Try to solve the problem without using any extra space.

 

Expected Time Complexity: O(N+M)
Expected Auxiliary Space: O(1)

*/

class Solution {
    //Function to find intersection point in Y shaped Linked Lists.
    intersectPoint(head1, head2)
    {
        //your code here
        let set = new Set()
        
        let temp = head1
        
        while(temp!=null){
            
            set.add(temp)
            temp =  temp.next
        }
        
        temp = head2
        
        while(temp!=null){
            
            if(set.has(temp)){
                if(temp.data == undefined){
                    return -1
                }
                
                return temp.data
            }
            
            temp = temp.next
        }
        
        return -1
    }
}

//Tc --> O(n + m) , sc-> O(n)


class Solution {
    //Function to find intersection point in Y shaped Linked Lists.
    intersectPoint(head1, head2) {

        // If any one is null so no intersection point between them return null
        if(head1 == null || head2 == null) return null

        let d1 = head1
        let d2 = head2

        //we go upto d1 == d2 , if intersection point present so it break from intersectuion point and we return
        // this point if no intersection point so both meet null and after loop we return null
        while(d1!=d2){

            d1 == null ? head2 : d1.next
            d2 == null ? head1 : d2.next
        }

        return d1
    }
}

//Tc --> O(n+m)