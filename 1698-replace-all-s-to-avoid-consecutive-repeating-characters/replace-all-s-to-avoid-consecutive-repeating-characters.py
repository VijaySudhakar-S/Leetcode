class Solution:
    def modifyString(self, s: str) -> str:
        arr = list(s)
        n = len(arr)

        for i in range(n):
            if arr[i] == "?":
                for c in "abc": 
                    if (i > 0 and arr[i - 1] == c) or (i < n - 1 and arr[i + 1] == c):
                        continue
                    arr[i] = c
                    break
                    
        return "".join(arr)
