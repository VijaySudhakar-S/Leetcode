class Solution:
    def checkDistances(self, s: str, distance: List[int]) -> bool:
        d = {}
        for i in range(len(s)):
            if s[i] not in d:
                d[s[i]] = i
            else:
                d[s[i]] = abs( i - d[s[i]])-1
        for i in d:
            cur = ord(i) - ord("a")
            if distance[cur] != d[i]:
                return False
        return True