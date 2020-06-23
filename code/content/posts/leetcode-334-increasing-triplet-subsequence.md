+++
title = "Leetcode 334 Increasing Triplet Subsequence - Python Solution"
date = 2020-01-16T10:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

Given an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.
Approach -  We take two variables a and b . We  initialize them to the biggest number in the array and then we iterate over the list and if a value is found less than the current value of a and b we change them. If a value greater than both of them is found then we return True which means we have found increasing subsequence. Here don't get confused with the fact that the subsequence can be non - contiguous .
       
{{< highlight python3 "linenos=table,linenostart=1" >}}
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        n =len(nums)
        if n == 0:
            return False
        a = max(nums)+1
        b = a+1
        for i in nums:
            if i<=a:
                a = i
            elif i<=b:
                b = i
            else:
                return True
            
        return False
        
{{< /highlight >}}