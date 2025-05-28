class Solution:
    def specialArray(self, nums: List[int]) -> int:
        arr = [i for i in nums if i!=0]
        if arr == []:
            return -1
        for i in range(max(arr)+1):
            ans = 0
            for j in arr:
                if j >= i:
                    ans+=1
            if ans == i:
                return ans
        return -1
            