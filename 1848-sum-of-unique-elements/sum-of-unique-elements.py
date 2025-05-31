class Solution:
    def sumOfUnique(self, nums: List[int]) -> int:
        s = set(nums)
        ans = 0
        for i in s:
            if nums.count(i) == 1:
                ans+=i
        return ans