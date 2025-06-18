class Solution:
    def largeGroupPositions(self, s: str) -> List[List[int]]:
        res = []
        if len(s) < 3:
            return res
        i = 0
        j = 1
        c = 1
        while j < len(s):
            if s[i] == s[j]:
                c+=1
                j+=1
            else:
                if c>=3:
                    res.append([i,j-1])
                i=j
                j=i+1
                c=1
        if c>=3:
            res.append([i,j-1])
        return res