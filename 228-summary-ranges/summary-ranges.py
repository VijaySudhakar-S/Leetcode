class Solution:
    def summaryRanges(self, nums: List[int]) -> List[str]:
        nums.append(float('-inf'))
        t = nums[0]
        result = []
        for i in range(len(nums)-1):
            if nums[i]+1 != nums[i+1]:
                if t == nums[i]:
                    result.append(str(t))
                else:
                    result.append("{}->{}".format(t,nums[i]))
                t = nums[i+1]     
        return result