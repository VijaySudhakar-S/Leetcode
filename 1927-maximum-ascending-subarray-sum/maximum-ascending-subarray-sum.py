class Solution:
    def maxAscendingSum(self, nums: List[int]) -> int:
        if len(nums) == 1:
            return nums[0]
        m = 0
        cur = 0
        for i in range(len(nums)-1):
            if nums[i] < nums[i+1]:
                cur+=nums[i]
            else:
                cur+=nums[i]
                m = max(m,cur)
                cur = 0
        if nums[-1]>nums[-2]:
            cur+=nums[-1]
            m = max(m,cur)
        return m