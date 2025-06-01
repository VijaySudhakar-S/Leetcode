class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        d = {}
        for i in arr:
            c = bin(i).count("1")
            if c not in d:
                d[c] = [i]
            else:
                d[c].append(i)
        if len(d) == 1:
            for i in d:
                return sorted(d[i])
        ans = []
        for i in sorted(d.keys()):
            ans+=sorted(d[i])
        return ans