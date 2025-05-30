class Solution:
    def reorderSpaces(self, text: str) -> str:
        a = text.split()
        space = text.count(" ")
        words = len(a)-1
        if space == 0:
            return text
        elif words == 0:
            return a[0]+(" "*space)
        quo = " "*(space//words)
        rem = space%words
        ans = a[-1]
        for i in a[:-1][::-1]:
            ans = i+quo+ans
        if rem != 0:
            ans+=" "*rem
        return ans

