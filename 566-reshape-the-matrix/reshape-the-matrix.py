class Solution:
    def matrixReshape(self, mat: List[List[int]], r: int, c: int) -> List[List[int]]:
        arr = []
        for i in mat:
            arr+=i
        if len(arr) != r*c:
            return mat
        res = []
        for i in range(0,len(arr),c):
            res.append(arr[i:i+c])
        return res