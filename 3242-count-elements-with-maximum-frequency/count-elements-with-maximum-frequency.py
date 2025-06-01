class Solution:
    def maxFrequencyElements(self, nums: List[int]) -> int:
        c = Counter(nums)
        m = max(c.values())
        ans = 0
        for i in c:
            if c[i] == m:
                ans+=m
        return ans