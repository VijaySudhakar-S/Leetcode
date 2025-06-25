class Solution:
    def countKeyChanges(self, s: str) -> int:
        ans = 0
        for i in range(len(s)-1):
            if s[i].lower() != s[i+1].lower():
                ans+=1
        return ans