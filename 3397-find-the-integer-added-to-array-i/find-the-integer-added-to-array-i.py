class Solution:
    def addedInteger(self, nums1: List[int], nums2: List[int]) -> int:
        ans = sum(nums2)-sum(nums1)
        return ans//len(nums1)