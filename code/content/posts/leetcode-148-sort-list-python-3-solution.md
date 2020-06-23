+++
title = "Letcode 148 Sort List Python 3 Solution"
date = 2020-02-02T10:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

Approach -  We use a merge sort for solving this problem it has to be done in O(N log N) and constant space O(1). We use the idea of merge sort where we first divide the list into two halves, doing so in an Array is easy but in a linked list, you have to do something different. We use the concept of fast and slow pointers where fast pointer traverses directly at a gap of two nodes whereas slow pointer traverses one at a time. so when our fast pointer reaches the end of the Linked list, our slow pointer will be pointing at the middle element of the linked list. We also take a temp variable which will store the slow pointer before its increment so that we can make it null which will be our end node of the first list. You can better understand by looking at the code below.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}
# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution:
    def sortList(self, head: ListNode) -> ListNode:
        
        #base case when the linked list has only one or no node at all
        if head is None or head.next is None:
            return head
        
        #divide the list
        
        temp = head
        slow = head
        fast = head
        
        while fast is not None and fast.next is not None:
            temp = slow
            slow = slow.next
            fast = fast.next.next
        
        #left list would start from head and end at temp
        #right list would start from slow and end at fast
        
        temp.next  = None
        left_list = self.sortList(head)
        right_list = self.sortList(slow)
        
        return self.merge(left_list,right_list)
        
    
    def merge(self,i,j):
        
        new_node = ListNode(0)
        curr_node = new_node
        
        while i != None and j != None:
            if i.val <= j.val:
                curr_node.next = i
                i = i.next
            else:
                curr_node.next = j
                j = j.next
            curr_node = curr_node.next
        
        while i != None:
            curr_node.next = i
            i = i.next
            curr_node = curr_node.next
        
        while j != None:
            curr_node.next = j
            j = j.next
            curr_node = curr_node.next

        return new_node.next
            
        
{{< /highlight >}}