/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
let minimumDifference = function(nums, k) {
    let minDiff = Infinity;
    
    if(k === 1 || nums.length == 1) return 0;

    nums.sort((a, b) => a - b);

    for(let i=0; i<=nums.length - k; i++){
        const windowMin = nums[i];
        const windowMax = nums[i+k-1];

        const diff = windowMax - windowMin;
        minDiff = Math.min(minDiff, diff);
    }

    return minDiff;
};