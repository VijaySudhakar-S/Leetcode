class Solution:
    def construct2DArray(self, original: List[int], m: int, n: int) -> List[List[int]]:
        arr = []
        if m * n != len(original):
            return arr
        i = 0
        while i < len(original):
            arr.append(original[i:n+i])
            i+=n
        return arr




        