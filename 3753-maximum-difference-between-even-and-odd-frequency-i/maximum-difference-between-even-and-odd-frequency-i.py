class Solution:
    def maxDifference(self, s: str) -> int:
        c = Counter(s)
        even = []
        odd = []
        for i in c:
            if c[i]%2==0:
                even.append(c[i])
            else:
                odd.append(c[i])
        m = float('-inf')
        for i in odd:
            for j in even:
                m = max(m,i-j)
        return m