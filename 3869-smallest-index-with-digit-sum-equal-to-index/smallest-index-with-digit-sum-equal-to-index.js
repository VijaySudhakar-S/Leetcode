/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestIndex = function(nums) {
    let ans = 101
    nums.forEach((num,i)=>{
        n = num.toString().split("").reduce((a,c)=> a + Number(c),0)
        if(n==i){
            ans = Math.min(ans,i)        }
    })
    if(ans==101) return -1
    return ans
};