class Solution:
    def countOdds(self, low: int, high: int) -> int:
        dif = (high-low)+1
        if dif == 1:
            if low%2==0:
                return 0 
            return 1
        if high%2==0:
            return dif//2
        else:
            if low%2==0:
                return (dif//2)
            return (dif//2)+1


                