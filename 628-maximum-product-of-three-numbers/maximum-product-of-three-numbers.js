/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    nums.sort((a,b)=>a-b)
    n = nums.length-1
    return Math.max(nums[n]*nums[n-1]*nums[n-2],nums[0]*nums[1]*nums[n])
};