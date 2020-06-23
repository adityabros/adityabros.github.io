+++
title = "Leetcode 210 Course Schedule II Python 3 Solution"
date = 2020-02-24T12:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

Approach - We will first create a graph out of this problem, Every pre-requisite course is connected to the course so the Pre=requisite course will be directing towards the course so we will create a Directed Acyclic Graph. We will find if there is any cycle in the graph and if it is so then taking all the courses will not be possible. To find if there is any cycle in the graph we will use an earlier discussed approach we took in Course Schedule I. We will use Topological Sort to get the order in which we need to take the course so that we take all the pre-requisites before the courses. If you have any doubt just let me know in the comments.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}

class Solution:
    def findOrder(self, numCourses: int, prerequisites: List[List[int]]) -> List[int]:
        
        white = set()
        black = set()
        grey  = set()
        top_sort = []
        # visited = set()
        connections = dict()
        for p in prerequisites:
            if p[1] not in connections:
                connections[p[1]] = set()
            connections[p[1]].add(p[0])
        for i in range(numCourses):
            white.add(i)
            # white.add(p[0])
            
        def traverse(root):
            if root in grey:
                #we have found cycle in our graph
                return False
            grey.add(root)
            
            if root in connections:
                for node in connections[root]:
                    if node not in black:
                        ans = traverse(node)
                        if not ans:
                            return False
            
            grey.remove(root)
            if root not in black:
                top_sort.append(root)
            black.add(root)
            
            return True
        
        for w in white:
            ans = traverse(w)
            if not ans:
                top_sort = []
                break
        return top_sort[::-1]
        
{{< /highlight >}}