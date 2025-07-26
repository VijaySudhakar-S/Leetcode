class Solution:
    def maxSum(self, nums: List[int]) -> int:
        pos = 0
        neg = float("-inf")
        s = set(nums)
        for i in s:
            if i>0:
                pos+=i
            else:
                neg = max(neg,i)
        if pos == 0 and neg != 0:
            return neg
        return pos

