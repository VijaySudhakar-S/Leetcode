class Solution:
    def isPossibleToSplit(self, nums: List[int]) -> bool:
        count = Counter(nums)
        if max(count.values()) >= 3:
            return False
        return True