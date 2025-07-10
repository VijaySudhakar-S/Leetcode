class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        m = max(nums)
        ans = m
        for i in range(k-1):
            m = m+1
            ans+=m
        return ans
        
