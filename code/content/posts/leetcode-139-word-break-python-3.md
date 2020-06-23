+++
title = "Leetcode 139 Word Break Python 3 "
date = 2020-02-02T12:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

Approach - We use dynamic programming in our solution. we first initialize our DP array with false at each index of character. We make our dp[i] as true when we have a word ending at i'th index in our dictionary and for that, the character before starting of this word in our string must also mark the end of the word. so in this way, our answer is at the last index of our DP array.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}

class Solution:
    def wordBreak(self, s: str, wordDict: List[str]) -> bool:
        
        n =len(s)
        dp = [False for i in range(n)]
        wordDict = set(wordDict)       
        for i in range(n):
            for w in wordDict:
                if s[i-len(w)+1:i+1] == w and (i-len(w) == -1 or dp[i-len(w)] == True):
                    dp[i] = True
        
        return dp[-1]
{{< /highlight >}}