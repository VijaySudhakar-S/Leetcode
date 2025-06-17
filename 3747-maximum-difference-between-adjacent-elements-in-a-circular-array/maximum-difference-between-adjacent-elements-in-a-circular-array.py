class Solution:
    def maxAdjacentDistance(self, nums: List[int]) -> int:
        ans =  abs(nums[0]-nums[-1])
        for i in range(len(nums)-1):
            diff = abs(nums[i] - nums[i+1])
            ans = max(ans,diff)
        return ans