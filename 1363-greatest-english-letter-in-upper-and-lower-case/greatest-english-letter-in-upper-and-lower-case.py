class Solution:
    def greatestLetter(self, s: str) -> str:
        ans = [""]
        t = s.upper()
        c = Counter(t)
        for i in c:
            if c[i]>=2 and i.lower() in s and i in s:
                ans.append(i)
        ans.sort()
        return ans[-1]