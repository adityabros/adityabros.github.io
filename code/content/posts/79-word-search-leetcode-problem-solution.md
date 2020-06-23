+++
title = "✱✱✱ 79. Word Search Leetcode Problem Solution"
date = 2020-04-25T00:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

In this problem we use the concept of backtracking, whenver we find a character matching the first character of our word we check the solution there if it is possible, for that we make four choices as we can move in four diretions left, right , upside and down and backtrack if we don't find the solution while traversing one of our possible paths.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}


class Solution:
    
    def check_word(self,board,word,r,c):
        
        if word[0] == board[r][c] and board[r][c] is not None:
            char_is = board[r][c]
            board[r][c] = None
            word = word[1:]
            if len(word) == 0:
                return True
            
            if (r+1 < len(board) and self.check_word(board,word,r+1,c) ):
                return True
            if (c+1 < len(board[0]) and self.check_word(board,word,r,c+1)):
                return True
            if r-1 > -1 and self.check_word(board,word,r-1,c):
                return True
            if c-1 > -1 and self.check_word(board,word,r,c-1):
                return True

            board[r][c] = char_is
            
        return False
        
    def exist(self, board: List[List[str]], word: str) -> bool:
        
        rows = len(board)
        if rows>0:
            cols= len(board[0])
        
        for r in range(rows):
            for c in range(cols):
                if board[r][c] == word[0]:
                    word_exists = self.check_word(board,word,r,c)
                    if word_exists:
                        return True
        return False
        
        
{{< /highlight >}}