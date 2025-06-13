class Solution:
    def sumOfEncryptedInt(self, nums: List[int]) -> int:
        ans = 0
        for num in nums:
            if num < 10:
                ans+=num
            else:
                s = str(num)
                m = max(int(i) for i in s)
                n = int(len(s)*str(m))
                ans+=n
        return ans