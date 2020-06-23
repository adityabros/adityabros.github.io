+++
title = "{ Leetcode } 150. Evaluate Reverse Polish Notation"
date = 2020-04-18T00:00:00+05:30
images = []
tags = []
categories = ["leetcode"]
draft = false
+++

We are maintaining a stack to evaluate this reverse polish expression, as soon as we find an operator we replace the top two most elements of the stack with the result and in the end, we get the answer at the top of our stack.

       
{{< highlight python3 "linenos=table,linenostart=1" >}}


class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        #expression stack
        expr = [] 
        ans = 0
        operators = {'+','-','/','*'}
        for t in tokens:
            if t in operators:
                #evalutate
                op1 = expr[-2]
                op2 = expr[-1]
                if t == '+':
                    ans = op1 + op2
                elif t == '/':
                    if op2 == 0:
                        ans = 0
                    elif op1 < 0 and op2 > 0:
                        ans = (-1* op1) // op2
                        ans = ans * -1
                    elif op1 >0  and op2 < 0:
                        ans = op1 // (op2 * -1)
                        ans = ans * -1
                    else:
                        ans = op1 // op2
                elif t == "*":
                    ans = op1 * op2
                else:
                    ans = op1 - op2
                expr.pop()
                expr.pop()
                expr.append(ans)
            else:
                expr.append(int(t))

        return expr[-1]
        
        
{{< /highlight >}}