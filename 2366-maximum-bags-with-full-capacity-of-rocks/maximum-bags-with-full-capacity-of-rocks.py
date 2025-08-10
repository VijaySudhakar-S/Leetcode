from typing import List

class Solution:
    def maximumBags(self, capacity: List[int], rocks: List[int], additionalRocks: int) -> int:
        remaining = [capacity[i] - rocks[i] for i in range(len(rocks))]
        remaining.sort()
        full = 0
        for need in remaining:
            if need == 0: 
                full += 1
            elif additionalRocks >= need:
                additionalRocks -= need
                full += 1
            else:
                break
        return full
