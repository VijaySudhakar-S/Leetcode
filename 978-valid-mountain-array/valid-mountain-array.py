class Solution:
    def validMountainArray(self, arr: List[int]) -> bool:
        if len(arr) < 3:
            return False
        inc = False
        dec = False
        i = 0
        while i < len(arr)-1:
            if arr[i] == arr[i+1]:
                return False
            elif arr[i] < arr[i+1]:
                inc = True
            else:
                break
            i+=1 
        while i < len(arr)-1:
            if arr[i] == arr[i+1]:
                return False
            elif arr[i] > arr[i+1]:
                dec = True
            else:
                dec = False
                break
            i+=1
        return inc and dec