class Solution:
    def canBeTypedWords(self, text: str, brokenLetters: str) -> int:
        ans= 0
        words = text.split(" ")
        broken = set(list(brokenLetters))
        for i in words:
           if len(set(i) & broken) == 0 :
            ans+=1
        return ans