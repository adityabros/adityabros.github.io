+++
title = "Leetcode 56. Merge Intervals Python 3 Solution"
date = 2020-03-02T12:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

For this problem first, we sort all the intervals in increasing order of the starting values of intervals which will take O(N log N) time. We maintain a stack where we keep on checking the top most value of stack if the current iterated elenent is overlapping with the top most element of stack then we update our stack, if the interval is non-overlapping we just simply append it in our stack. Look the code below to get a better understanding of my approach and let me know if you face any problem while understanding the python 3 solution of the problem below.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}

class Solution:
    def merge(self, intervals: List[List[int]]) -> List[List[int]]:
        #we need to sort the itnervals
        intervals = sorted(intervals, key = lambda i : i[0])
        n = len(intervals)
        if n == 0:
            return []
        #stack to keep our final intervals
        final_intervals = [intervals[0]] 
        #find overlapping intervals
        for i in range(1,n):
            curr_interval = intervals[i]
            #check if the current interval is overlapping with the top most element of our stack
            if final_intervals[-1][1] >= curr_interval[0]:
                #they overlap
                final_intervals[-1][1] = max(final_intervals[-1][1],curr_interval[1])
            else:
                final_intervals.append(curr_interval)
        return final_intervals
        
{{< /highlight >}}