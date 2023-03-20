/*

Given two linked lists sorted in increasing order, create a new linked list representing the intersection of the two linked lists. The new linked list should be made with its own memory the original lists should not be changed.
Note: The linked list elements are not necessarily distinct.

Example 1:

Input:
L1 = 1->2->3->4->6
L2 = 2->4->6->8
Output: 2 4 6
Explanation: For the given first two
linked list, 2, 4 and 6 are the elements
in the intersection.
Example 2:

Input:
L1 = 10->20->40->50
L2 = 15->40
Output: 40
Your Task:
The task is to complete the function intersection() which should find the intersection of two linked list and add all the elements in intersection to the third linked list and return the head of the third linked list.

Expected Time Complexity : O(n+m)
Expected Auxilliary Space : O(n+m)
Note: n,m are the size of the linked lists.

*/

// Approch same as array approch

class Solution {

    findIntersection(head1, head2) {
        //your code here

        if (head1 == null || head2 == null) return null

        let head = null // create new Intersection linked list
        let tail = head

        let curr1 = head1 // it denote 1st list
        let curr2 = head2 // it denote 2st list

        while (curr1 != null && curr2 != null) {

            if (curr1.data == curr2.data) { // if arr[i] == arr[j]

                let newNode = new Node(curr1.data)

                if (tail == null) { // inset node at tail
                    head = newNode
                    tail = head
                }
                else {
                    tail.next = newNode
                    tail = newNode
                }

                // while(curr1.next!=null && curr1.data == curr1.next.data) // remove all duplicate , only single value then use
                // {
                //     curr1 = curr1.next   
                // }

                // while(curr2.next!=null && curr2.data == curr2.next.data)
                // {
                //     curr2 = curr2.next
                // }  

                // If want all mapping then comment out previous

                curr1 = curr1.next 
                curr2 = curr2.next
            }
            else if (curr1.data < curr2.data) {
                curr1 = curr1.next
            }
            else {
                curr2 = curr2.next
            }
        }

        return head
    }
}
