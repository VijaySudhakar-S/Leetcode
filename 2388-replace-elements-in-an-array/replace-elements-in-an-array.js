/**
 * @param {number[]} nums
 * @param {number[][]} operations
 * @return {number[]}
 */
var arrayChange = function(nums, operations) {
    let obj = {}
    for (let i = 0;i<nums.length;i++){
        obj[nums[i]] = i
    }
    for (let arr of operations){
       let index = obj[arr[0]]
       nums[index] = arr[1]
       delete obj[arr[0]]
       obj[arr[1]] = index
    }
    return nums
};