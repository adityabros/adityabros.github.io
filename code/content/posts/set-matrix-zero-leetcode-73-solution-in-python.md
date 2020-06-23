+++
title = "Set Matrix Zero, LeetCode 73 Solution in Python 3"
date = 2020-01-02T22:39:13+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.
Example 1:
Input: 
[
  [1,1,0],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [0,0,0],
  [0,0,0],
  [1,0,0]
]
Here the approach is very simple. We just have to traverse the matrix and note down the rows and columns indexes which are required to be zero, for that we will use set data structure as it has a constant O(1) search complexity. Then we will again traverse the matrix and will make the element zero if its row or its column is in our set.Below is code of this approach in Python. Just try to do it yourself and then only look into the code otherwise it will hinder your growth.

{{< highlight python3 "linenos=table,linenostart=1" >}}
 class Solution:
    def setZeroes(self, matrix: List[List[int]]) -> None:
        """
        Do not return anything, modify matrix in-place instead.
        """
        rows = len(matrix)
        if  rows > 0:
            cols = len(matrix[0])
        zero_rows = set()
        zero_cols = set()
        
        for r in range(rows):
            for c in range(cols):
                if matrix[r][c] == 0:
                    zero_rows.add(r)
                    zero_cols.add(c)
        for r in range(rows):
            for c in range(cols):
                if r in zero_rows or c in zero_cols:
                    matrix[r][c] = 0
{{< / highlight >}}    