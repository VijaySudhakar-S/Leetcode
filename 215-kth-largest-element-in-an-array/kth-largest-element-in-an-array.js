/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    let s = nums.sort((a,b)=>b-a)
    return s[k-1]
};