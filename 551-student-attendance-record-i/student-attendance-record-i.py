class Solution:
    def checkRecord(self, s: str) -> bool:
        ac = s.count("A")
        if ac >= 2:
            return False
        for i in range(len(s)-2):
            if s[i] == "L" and s[i+1] == "L" and s[i+2] == "L":
                return False
        return True