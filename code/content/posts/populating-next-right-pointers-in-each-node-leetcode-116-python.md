+++
title = "Populating Next Right Pointers in Each Node Leetcode 116 Python"
date = 2020-01-03T19:39:13+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

You are given a perfect binary tree where all leaves are on the same level, and every parent has two children.
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.
Initially, all next pointers are set to NULL.

Approach -  Here we simply keep a track of all the nodes in a particular level from left to right, for this purpose we use a hash-map or dictionary in python called level nodes, After creating our hash-map we simply traverse each level which has its value as an array and we point each node to next node in that level. See the below code for understanding and first try yourself.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}
"""
# Definition for a Node.
class Node:
    def __init__(self, val: int = 0, left: 'Node' = None, right: 'Node' = None, next: 'Node' = None):
        self.val = val
        self.left = left
        self.right = right
        self.next = next
"""
class Solution:
    def __init__(self):
        self.level_nodes = {}
    def traverse(self,root,level):
        if root:
            if level not in self.level_nodes:
                self.level_nodes[level]=[]
            self.level_nodes[level].append(root)
            self.traverse(root.left,level+1)
            self.traverse(root.right,level+1)
    def connect(self, root: 'Node') -> 'Node':
        
        self.traverse(root,0)
        
        for level,nodes in self.level_nodes.items():
            n = len(nodes)
            for i in range(n):
                if i==n-1:
                    nodes[i].next = None
                else:
                    nodes[i].next = nodes[i+1]
        return root
        
{{< /highlight >}}