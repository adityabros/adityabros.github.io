+++
title = "Leetcode 134. Gas Station  solution in Python 3 programming language"
date = 2020-03-14T00:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

We start our journey at each gas pump and check whether we reach the starting pump or not, just see the code below to get the grasp of the approach used for this problem.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}


class Solution:
    def canCompleteCircuit(self, gas: List[int], cost: List[int]) -> int:
        n = len(gas)
        
        for starting_pump in range(n):
            tank = gas[starting_pump]
            cost_to_next_pump = cost[starting_pump]
            next_pump = starting_pump
            
            while tank >= cost_to_next_pump:
                tank -= cost_to_next_pump
                next_pump = (next_pump + 1)%n
                if next_pump == starting_pump:
                    return starting_pump
                tank += gas[next_pump]
                cost_to_next_pump = cost[next_pump]

        return -1
        
        
{{< /highlight >}}