/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let sum = 0
    for(let i=0;i<nums.length;i++){
        let s = i.toString(2).split("").filter(n=>n=="1").length
        if(s==k) sum+=nums[i]
    }
    return sum
};