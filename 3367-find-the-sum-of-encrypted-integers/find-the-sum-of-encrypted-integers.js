/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfEncryptedInt = function(nums) {
    function encrypt(num){
        s = num.toString()
        m = Math.max(...s.split("").map((n)=>Number(n)))
        return Number((m.toString()).repeat(s.length))
    }
    let ans = 0
    for(let num of nums){
        if(num < 10){
            ans+=num
        }
        else{
            ans+=encrypt(num)
        }
    }
    return ans
};