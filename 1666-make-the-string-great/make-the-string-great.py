class Solution:
    def makeGood(self, s: str) -> str:
        stack = []
        for i in s:
            if stack == []:
                stack.append(i)
            elif stack[-1] == i.lower() and stack[-1] != i:
                stack.pop()
            elif stack[-1] == i.upper() and stack[-1] != i:
                stack.pop()
            else:
                stack.append(i)
        return "".join(stack)