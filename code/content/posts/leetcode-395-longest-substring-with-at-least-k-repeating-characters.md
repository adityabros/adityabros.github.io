+++
title = "Leetcode 395 : Longest Substring with At Least K Repeating Characters (Python 3)"
date = 2020-01-16T00:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

Find the length of the longest substring T of a given string (consists of lowercase letters only) such that every character in T appears no less than k times.

Approach -  We will split our string when we find if a character is less than k, for splitting we use two variables i and j in the last while loop as you can see, we keep a SET of characters whose count is less than k. When we find a character whose count is smaller than the value of k then we split from the last valid character till before this invalid character(whose value is less) . We use recursion to fulfill our mission.
       
{{< highlight python3 "linenos=table,linenostart=1" >}}
class Solution:
    def longestSubstring(self,s,k):
        ans = 0

        count = {}
        for i in s:
            if i not in count:
                count[i] = 0
            count[i] += 1

        split_set = set()

        for i in s:
            if count[i] < k:
                split_set.add(i)

        if len(split_set) == 0:
            return len(s)
        maxc = 0

        i =0
        j = 0
        while j<len(s):
            if s[j] in split_set:
                if i != j:
                    maxc = max(maxc,self.longestSubstring(s[i:j],k))
                i = j+1
            j += 1
        if i != j:
            maxc = max(maxc,self.longestSubstring(s[i:j],k))

        return maxc
        
{{< /highlight >}}