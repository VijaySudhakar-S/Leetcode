class Solution:
    def maxArea(self, height: List[int]) -> int:
        l = 0
        r = len(height)-1
        maxx = 0
        while l<r:
            i = height[l]
            j = height[r]
            w = r-l
            h = min(i,j)
            maxx = max(maxx, w*h)
            if j > i:
                l+=1
            else:
                r-=1
        return maxx
        





