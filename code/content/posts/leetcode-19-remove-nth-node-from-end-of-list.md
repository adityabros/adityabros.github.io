+++
title = "Leetcode 19. Remove Nth Node From End of List"
date = 2020-04-14T00:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

We are using a hashmap or dictionary to maintain indexes of node as we traverse them, as soon as we finish traversing we get the nth node from the back by subtracting it from the last node + 1, +1 as we move ahead of the last node and reach null see code to clarify this little thing, we make the pointer of the n-1'th node pointing to n+1'th node.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}


# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def removeNthFromEnd(self, head: ListNode, n: int) -> ListNode:
        
        node = head
        node_index = dict()
        ct = 1
        while node != None:
            node_index[ct] = node
            ct += 1
            node = node.next
        if ct-n-1 <= 0:
            return node_index[ct-n].next
        node_index[ct-n-1].next = node_index[ct-n].next
        return head
        
        
{{< /highlight >}}