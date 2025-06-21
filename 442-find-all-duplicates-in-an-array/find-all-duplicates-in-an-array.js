/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let obj = {}
    for(let i of nums){
        obj[i] = (obj[i] || 0)+1
    }
    let res = []
    for(let i in obj){
        if (obj[i]==2){
            res.push(Number(i))
        }
    }
    return res
};