class Solution:
    def detectCapitalUse(self, word: str) -> bool:
        if len(word) == 1:
            return True
        if word[0].isupper():
            if word[1].isupper():
                for i in word[2:]:
                    if i.islower():
                        return False
            else:
                for i in word[2:]:
                    if i.isupper():
                        return False
        else:
            for i in word[1:]:
                if i.isupper():
                    return False
        return True
