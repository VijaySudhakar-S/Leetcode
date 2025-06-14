/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProductDifference = function(nums) {
    nums.sort((a,b)=>b-a)
    n = nums.length-1
    return (nums[0]*nums[1])-(nums[n]*nums[n-1])
};