class Solution:
    def minimumTotal(self, triangle: List[List[int]]) -> int:
        n=len(triangle)
        arr = [[float('inf')] * len(triangle[i]) for i in range(n)]
        arr[0][0] = triangle[0][0]
        for i in range(n-1):
            for j in range(len(triangle[i])):
                arr[i+1][j] = min(arr[i+1][j], arr[i][j] + triangle[i+1][j])
                arr[i+1][j+1] = min(arr[i+1][j+1], arr[i][j] + triangle[i+1][j+1])
        return min(arr[n-1])
                
