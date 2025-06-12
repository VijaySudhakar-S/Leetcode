class Solution:
    def getNoZeroIntegers(self, n: int) -> List[int]:
        a = 0
        b = n
        while True:
            a1 = str(a)
            b1 = str(b)
            if "0" in a1 or "0" in b1:
                a+=1
                b-=1
            if a+b == n and "0" not in a1 and "0" not in b1:
                break
        return [a,b]