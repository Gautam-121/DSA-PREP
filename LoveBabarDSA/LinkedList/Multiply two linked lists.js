/*

Given elements as nodes of the two linked lists. The task is to multiply these two linked lists, say L1 and L2. 

Note: The output could be large take modulo 109+7.

Example:

Input:
2
2
3 2
1
2
3
1 0 0
2
1 0 
Output:
64
1000

Explanation:
Testcase 1: 32*2 = 64.
Testcase 2: 100*10 = 1000.
Input:


The first line of input contains an integer T denoting the number of test cases. Then T test cases follow, the first line of each test case contains an integer N denoting the size of the first linked list (L1). In the next line are the space-separated values of the first linked list. The third line of each test case contains an integer M denoting the size of the second linked list (L2). In the fourth line is space-separated values of the second linked list.

Output:
For each test case output will be an integer denoting the product of the two linked lists.

Your Task:
The task is to complete the function multiplyTwoLists() which should multiply the given two linked lists and return the result.

Constraints:

*/

class Solution {
    multiplyTwoLists(l1,l2){
      //code here
      
      let curr1 = l1
      let curr2 = l2
      
      let ans1 = 0
      let ans2 = 0
      
      let mod = 1000000007
      
      while(curr1!=null){
          
          ans1 =  ((ans1 * 10)%mod + curr1.data%mod)%mod
          curr1 = curr1.next
      }
      
       while(curr2!=null){
          
          ans2 =  ((ans2 * 10)%mod + curr2.data%mod)%mod
          curr2 = curr2.next
      }
      
  
      let finalAns = (ans1%mod * ans2%mod)%mod
      
      return finalAns
    }
  }