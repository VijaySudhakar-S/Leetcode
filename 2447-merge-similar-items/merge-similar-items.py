class Solution:
    def mergeSimilarItems(self, items1: List[List[int]], items2: List[List[int]]) -> List[List[int]]:
        ans = []
        arr = items1 + items2
        arr.sort()
        i = 0
        j = 1
        n = len(arr)
        while i < n:
            if i == n - 1:
                ans.append(arr[i])
                break
            if arr[i][0] == arr[j][0]:
                ans.append([arr[i][0],arr[i][1]+arr[j][1]])
                i+=2
                j+=2
            else:
                ans.append(arr[i])
                i+=1
                j+=1
        print(arr)
        return ans

