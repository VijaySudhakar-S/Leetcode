class Solution:
    def maxNumberOfBalloons(self, text: str) -> int:
        a = min([text.count("a"),text.count("b"),text.count("n")])
        b = min([text.count("l"),text.count("o")])
        return min(b//2,a)
        
        