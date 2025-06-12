class Solution:
    def findClosestNumber(self, nums: List[int]) -> int:
        num = float("inf")
        dis = float("inf")
        for i in nums:
            d = abs(i)
            if d <= dis:
                dis = d
                if dis == num:
                    num = max(num,i)
                else:
                    num = i
        return num