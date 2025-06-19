/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let res = []
    for(let i of nums){
        if(i<10){
            res.push(i)
        }else{
            s = i.toString()
            for(let j of s){
                res.push(Number(j))
            }
        }
    }
    return res
};