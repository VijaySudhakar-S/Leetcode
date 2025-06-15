class Solution:
    def diStringMatch(self, s: str) -> List[int]:
        a = 0
        b = len(s)
        res = [0]*len(s)
        for i in range(len(s)):
            if s[i] == "I":
                res[i] = a
                a+=1
            else:
                res[i] = b
                b-=1
        return res + [a]
