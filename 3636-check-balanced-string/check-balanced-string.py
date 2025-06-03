class Solution:
    def isBalanced(self, num: str) -> bool:
        odd = 0
        even = 0
        for i in range(len(num)):
            a = int(num[i])
            if i%2==0:
                odd+=a
            else:
                even+=a
        return odd==even
        