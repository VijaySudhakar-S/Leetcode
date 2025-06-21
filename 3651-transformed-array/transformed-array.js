/**
 * @param {number[]} nums
 * @return {number[]}
 */
var constructTransformedArray = function(nums) {
    const arr = []
    const n = nums.length
    for(let i=0;i<nums.length;i++){
        let j = (i+nums[i]%n+n)%n
        arr.push(nums[j])
    }
    return arr
};