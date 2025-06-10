class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        a = min([text.count("a"),text.count("b"),text.count("n")])
        if a == 0:
            return 0
        b = min([text.count("l"),text.count("o")])
        if b <= 1:
            return 0
        if b//2 >= a:
            return a
        return b//2
        
        