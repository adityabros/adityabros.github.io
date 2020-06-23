+++
title = "Leetcode 207 Course Schedule Soln in Python "
date = 2020-01-14T13:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]

Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Approach - Its a graph question, we simply have to find if there is a cycle in the Graph. The graph is directed. We take three sets with names White, Grey and Black. White stores the unvisited nodes, grey stores the visited ones and black stores the node whose all children have been  visited. If at any time we encounter a node in grey set, we know that there is a cycle in the graph. Below is the approach but make sure to do yourself first.
       
{{< highlight python3 "linenos=table,linenostart=1" >}}
import random
class Solution:
    def __init__(self):
        self.possible = True
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        connections = {}
        # visited = set()
        if len(prerequisites) == 0:
            return True
        white = set() #It will store the unvisited nodes
        grey = set()#It will store the visited nodes
        black = set()#It will store the nodes whose all childrens have beeen visited
        for p in prerequisites:
            if p[0] not in connections:
                connections[p[0]] = set()
            connections[p[0]].add(p[1])
            white.add(p[0])
            white.add(p[1])
        # print(white)
        def dfs(node,white,grey,black):
            if node in grey:
                self.possible = False
                return
            if node in white:
                white.remove(node)
            grey.add(node)
            if node in connections:
                for i in connections[node]:
                    if i not in black:
                        dfs(i,white,grey,black)
            if node in grey:
                grey.remove(node)
            black.add(node)
        while len(white)>0:
            node = random.choice(tuple(white))
            dfs(node,white,grey,black)
        return self.possible
        
{{< /highlight >}}