/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function(nums) {
    nums.sort((a,b) => b - a);
    for(let i of nums){
        if(nums.includes(-i)) return i
    }
    return -1
};