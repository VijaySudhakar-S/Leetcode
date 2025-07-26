class Solution:
    def countNegatives(self, grid: List[List[int]]) -> int:
        def binsearch(arr):
            left = 0
            right = len(arr)-1
            while left <= right:
                mid = (left+right)//2
                if arr[mid] >= 0:
                    left=mid+1
                else:
                    right=mid-1
            return len(arr)-left
        ans = 0
        for arr in grid:
            ans+=binsearch(arr)
        return ans
