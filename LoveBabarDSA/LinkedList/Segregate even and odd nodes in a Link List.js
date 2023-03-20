/*
Given a link list of size N, modify the list such that all the even numbers appear before all the odd numbers in the modified list. The order of appearance of numbers within each segregation should be same as that in the original list.

NOTE: Don't create a new linked list, instead rearrange the provided one.


Example 1:

Input: 
N = 7
Link List:
17 -> 15 -> 8 -> 9 -> 2 -> 4 -> 6 -> NULL

Output: 8 2 4 6 17 15 9

Explaination: 8,2,4,6 are the even numbers 
so they appear first and 17,15,9 are odd 
numbers that appear later.

Example 2:

Input:
N = 4
Link List:
1 -> 3 -> 5 -> 7

Output: 1 3 5 7

Explaination: There is no even number. 
So ne need for modification.

Your Task:
You do not need to read input or print anything. Your task is to complete the function divide() which takes N and head of Link List as input parameters and returns the head of modified link list. Don't create a new linked list, instead rearrange the provided one.


Expected Time Complexity: O(N)
Expected Auxiliary Space: O(1)
*/


class Solution {
    divide(N,head){
      //code here
      
      if(head == null || head.next == null) return head
      
      let evenHead =  null
      let evenTail =  null
      let oddHead =  null
      let oddTail =  null
      
      let currNode = head
      
      while(currNode!=null){
          
          let value = currNode.data
          
          if(value%2 == 0){
              
              if(evenHead == null){
                  evenHead = currNode
                  evenTail = evenHead
              }
              else{
                  evenTail.next = currNode
                  evenTail = evenTail.next
              }
          }
          else{
              
              if(oddHead == null){
                  oddHead = currNode
                  oddTail = oddHead
              }
              else{
                  oddTail.next = currNode
                  oddTail = oddTail.next
              }
          }
          
          currNode = currNode.next
      }
      
      if(evenHead == null || oddHead == null) return head
      
      evenTail.next = oddHead
      oddTail.next = null
      
      head = evenHead
      
      return head
      
    }
  }
  