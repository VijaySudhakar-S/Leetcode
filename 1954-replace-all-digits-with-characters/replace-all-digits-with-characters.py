class Solution:
    def replaceDigits(self, s: str) -> str:
       res = ""
       i = 0
       while i < len(s)-1:
        char = chr(ord(s[i])+int(s[i+1]))
        res+=s[i]+char
        i+=2
       return res+s[i:]