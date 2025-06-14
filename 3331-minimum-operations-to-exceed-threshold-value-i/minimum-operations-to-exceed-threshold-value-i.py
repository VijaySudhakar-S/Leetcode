class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        ans = 0
        while min(nums) < k:
            nums.remove(min(nums))
            ans+=1
        return ans
