class Solution:
    def numberOfLines(self, widths: List[int], s: str) -> List[int]:
        count = 1
        temp = 0
        for i in range(len(s)):
            temp+=widths[ord(s[i])-97]
            if temp > 100:
                count+=1
                temp = widths[ord(s[i])-97]
        return [count,temp]