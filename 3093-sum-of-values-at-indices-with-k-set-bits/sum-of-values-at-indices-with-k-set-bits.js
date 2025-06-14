/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var sumIndicesWithKSetBits = function(nums, k) {
    let ans = 0
    nums.forEach((n,i)=>{
        let a = i.toString(2).split("1").length - 1
        if(a==k){
            ans+=n
        }
    })
    return ans
};