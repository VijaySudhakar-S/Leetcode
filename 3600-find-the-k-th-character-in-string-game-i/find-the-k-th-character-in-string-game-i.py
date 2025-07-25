class Solution:
    def kthCharacter(self, k: int) -> str:
        word = "a"
        temp = "" 
        while len(word) <= k:
            for i in word:
                temp+=chr(((ord(i)-ord("a")+1)%26)+ord("a")) 
            word+=temp
            temp = ""
        return word[k-1]