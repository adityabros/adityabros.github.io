+++
title = "Lowest Common Ancestor of a Binary Tree Leetcode 236 in Python 3"
date = 2020-01-02T23:39:13+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.
The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).

Approach - Here we will simple keep a track of parent of each node through an array. When we reach node P and Q we put its parent in a Hash Map or dictionary which we will use later to find their common ancestors.The code is self explanatory. Just try yourself before peeking into code.
       
{{< highlight python3 "linenos=table,linenostart=1" >}}
# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution:
    def __init__(self):
        self.parent_dict = {} #Keep track of parent of nodes P and Q
        self.p = None
        self.q  =None
    def traverse(self,root,arr):
        if root:
            if root.val == self.p or root.val == self.q: # we only need parents of P and Q node
                self.parent_dict[root.val]=[a for a in arr]+[root] #its parent
            arr.append(root)
            self.traverse(root.left,arr)
            self.traverse(root.right,arr)
            arr.pop() #removing itself from array after its descendants have been traversed
    def lowestCommonAncestor(self, root: 'TreeNode', p: 'TreeNode', q: 'TreeNode') -> 'TreeNode':
        self.p = p.val
        self.q = q.val
        self.traverse(root,[])
        set_q = set(self.parent_dict[q.val]) #set Data Structure helps searching constant time O(1)
        for child in self.parent_dict[p.val][::-1]:# we have to traverse in reverse order to find LCA
            if child in set_q:
                return child 
        
{{< /highlight >}}