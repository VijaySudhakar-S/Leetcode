class Solution:
    def shortestToChar(self, s: str, c: str) -> List[int]:
        arr = [i for i in range(len(s)) if s[i] == c]
        res = []
        for i in range(len(s)):
            miin = []
            for j in arr:
                miin.append(abs(i-j))
            res.append(min(miin))
        return res