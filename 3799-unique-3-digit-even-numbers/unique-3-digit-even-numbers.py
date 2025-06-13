class Solution:
    def totalNumbers(self, digits: List[int]) -> int:
        sett = set()
        for a,b,c in permutations(digits,3):
            if a !=0 and c%2==0:
                n = (100*a)+(10*b)+c
                sett.add(n)
        return len(sett)