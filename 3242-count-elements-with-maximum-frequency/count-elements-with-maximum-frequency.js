/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
      const c = {};
      nums.forEach(val => c[val] = c[val]+1 || 1);
      let m = Math.max(...Object.values(c))
      let ans = 0
      for(i in c){
        if (c[i] == m){
            ans+=m
        }
      }
      return ans
};