class Solution:
    def isMonotonic(self, nums: List[int]) -> bool:
        a = sorted(nums)
        b = sorted(nums)[::-1]
        if a == nums or b == nums:
            return True
        return False