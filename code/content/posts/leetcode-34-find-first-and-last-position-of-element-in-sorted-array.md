+++
title = "Leetcode 34 -> Find First and Last Position of Element in Sorted Array"
date = 2020-03-28T00:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

We use the modified binary search here, when we find the element we don't break our binary search, instead we keep on moving, One time towards left and another time towards the right to find the left most and right most index of our target. The below code illustrates the approach more clearly.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}


class Solution:
    
    def bin_search(self,nums,target,lr):
        n = len(nums)
        low = 0
        high = n-1
        tfound = None
        while low<=high:
            mid = (low+high)//2
            if nums[mid] == target:
                tfound = mid
                if lr == "left":
                    high = mid-1
                else:
                    low = mid + 1
                # break
            elif target < nums[mid]:
                high = mid - 1
            else:
                low = mid + 1
        if tfound == None:
            tfound = -1
        return tfound
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        
        n = len(nums)
        
        lb = self.bin_search(nums,target,"left")
        ub = self.bin_search(nums,target,"right")
        return [lb,ub]
        
        
{{< /highlight >}}