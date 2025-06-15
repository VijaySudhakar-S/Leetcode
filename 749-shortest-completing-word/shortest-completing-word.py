class Solution:
    def shortestCompletingWord(self, licensePlate: str, words: List[str]) -> str:
        s = Counter([ i.lower() for i in licensePlate if i.isalpha() and 1 != " "])
        w = sorted(words,key=len)
        print(s)
        for word in w:
            if Counter(word)&s == s:
                return word
