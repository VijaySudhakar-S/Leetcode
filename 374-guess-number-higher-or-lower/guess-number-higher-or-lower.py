# The guess API is already defined for you.
# @param num, your guess
# @return -1 if num is higher than the picked number
#          1 if num is lower than the picked number
#          otherwise return 0
# def guess(num: int) -> int:

class Solution:
    def guessNumber(self, n: int) -> int:
        l = 1
        r = n
        while l <= r :
            num = (l+r)//2
            g = guess(num)
            if g == -1:
                r = num-1
            elif g == 1:
                l = num+1
            else:
                return num