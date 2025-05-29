class Solution:
    def deleteGreatestValue(self, grid: List[List[int]]) -> int:
        ans = 0
        while len(grid[0]) != 0:
            temp = []
            for i in range(len(grid)):
                m = max(grid[i])
                temp.append(m)
                grid[i].remove(m)
            ans+=max(temp)
        return ans
