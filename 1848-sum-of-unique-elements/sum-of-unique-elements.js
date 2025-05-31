/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function(nums) {
    const s = new Set(nums);
    let ans = 0;
    for (let num of s) {
        const count = nums.filter(n => n === num).length;
        if (count === 1) {
            ans += num;
        }
    }
    return ans;
};