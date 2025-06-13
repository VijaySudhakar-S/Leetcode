/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    const count = {}
    for(let i of nums){
        if(i in count){
            count[i]+=1
        }else{
            count[i]=1
        }
    }
    let m = Math.max(...Object.values(count))
    let maax = []
    for(let i in count){
        if (count[i] == m){
            maax.push(Number(i))
        }
    }
    let ans = Infinity
    for(let i of maax){
        a = nums.indexOf(i)
        b = nums.lastIndexOf(i)
        c = Math.abs(a-b)+1
        ans = Math.min(ans,c)
    }
    
    return ans
};