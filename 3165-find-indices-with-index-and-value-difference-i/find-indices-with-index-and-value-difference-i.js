/**
 * @param {number[]} nums
 * @param {number} indexDifference
 * @param {number} valueDifference
 * @return {number[]}
 */
var findIndices = function(nums, indexDifference, valueDifference) {
    let n = nums.length
    if(n==1){
        let i=0,j=0
        if(Math.abs(i-j)>=indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference){
            return [i,j]
        }
    }
    for(let i=0;i<n-1;i++){
        for(let j=i;j<n;j++){
            if(Math.abs(i-j)>=indexDifference && Math.abs(nums[i] - nums[j]) >= valueDifference){
                return [i,j]
            }
        }
    }
    return [-1,-1]
};