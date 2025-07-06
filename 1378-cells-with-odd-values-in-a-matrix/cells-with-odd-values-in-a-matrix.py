class Solution:
    def oddCells(self, m: int, n: int, indices: List[List[int]]) -> int:
        matrix = []
        for i in range(m):
            matrix.append([0]*n)
        for r,c in indices:
            for i in range(len(matrix[r])):
                matrix[r][i]+=1
            for j in range(len(matrix)):
                matrix[j][c]+=1
        ans = 0
        for row in matrix:
            for n in row:
                if n%2 !=0:
                    ans+=1
        return ans