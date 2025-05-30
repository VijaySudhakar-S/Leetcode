class Solution:
    def gcdOfStrings(self, str1: str, str2: str) -> str:
        a = str1+str2
        b = str2+str1
        if a != b:
            return ""
        g = math.gcd(len(str1), len(str2))
        return str1[:g]
