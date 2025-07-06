/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let check = () => nums.some((n)=>n<k)
    let c = 0
    while(check()){
        for(let i=0;i<nums.length;i++){
            if (nums[i] < k){
                nums.splice(i,1)
                c++
            }
        }
    }
    return c
};