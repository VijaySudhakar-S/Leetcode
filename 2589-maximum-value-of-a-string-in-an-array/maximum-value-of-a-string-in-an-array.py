class Solution:
    def maximumValue(self, strs: List[str]) -> int:
        ans = 0
        for char in strs:
            d = ""
            c = ""
            for i in char:
                if i.isdigit():
                    d+=i
                else:
                    c+=i
            if c == "":
                ans = max(ans,int(d))
            else:
                ans = max(ans,len(char))
        return ans