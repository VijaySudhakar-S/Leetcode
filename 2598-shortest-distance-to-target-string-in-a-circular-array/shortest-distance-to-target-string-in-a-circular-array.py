class Solution:
    def closestTarget(self, words: List[str], target: str, startIndex: int) -> int:
        n = len(words)
        ans = n
        for i in range(n):
            if words[i] == target:
                dis = min(abs(i-startIndex), n-abs(i-startIndex))
                ans=min(ans,dis)
        if ans == n:
            return -1
        return ans


