/**
 * @param {number[]} nums
 * @return {number[]}
 */
var distinctDifferenceArray = function(nums) {
    n = nums.length
    let res = []
    for(let i=0;i<n;i++){
        let left = new Set()
        let right = new Set()
        for(let j=i+1;j<n;j++) left.add(nums[j])
        for(let k=i;k>=0;k--) right.add(nums[k])
        res.push(right.size-left.size)
    }
    return res
};