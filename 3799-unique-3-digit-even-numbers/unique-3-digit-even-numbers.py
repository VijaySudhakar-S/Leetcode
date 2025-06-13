class Solution:
    def totalNumbers(self, digits: List[int]) -> int:
        ans = 0
        arr = []
        for nums in permutations(digits,3):
            print(nums)
            if nums[0] !=0 and nums[-1]%2==0 and nums not in arr:
                ans+=1
                arr.append(nums)
        return ans