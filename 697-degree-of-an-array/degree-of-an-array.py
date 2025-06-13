class Solution:
    def findShortestSubArray(self, nums: List[int]) -> int:
        c = Counter(nums)
        m = max(c.values())
        arr = []
        for i in c:
            if c[i] == m:
                arr.append(i)
        print(arr)
        ans = len(nums)
        for i in arr:
            a = nums.index(i)
            b = len(nums)-1-nums[::-1].index(i)
            c = abs(a-b)+1
            ans = min(ans,c)
        return ans