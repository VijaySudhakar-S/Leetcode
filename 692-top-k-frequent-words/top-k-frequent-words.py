class Solution:
    def topKFrequent(self, words: List[str], k: int) -> List[str]:
        count = Counter(words)
        ans = []
        values = sorted(list(set(count.values())),reverse=True)
        print(values)
        temp = []
        for i in values:
            for j in count:
                if count[j]==i:
                    temp.append(j)
            ans+=sorted(temp)
            temp = []
            if len(ans)>=k:
                return ans[:k]
        return []
            
