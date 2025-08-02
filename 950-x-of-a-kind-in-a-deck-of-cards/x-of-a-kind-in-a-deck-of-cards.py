class Solution:
    def hasGroupsSizeX(self, deck: List[int]) -> bool:
        c = Counter(deck)
        counts = list(c.values())
        group_size = reduce(gcd, counts)
        return group_size >= 2