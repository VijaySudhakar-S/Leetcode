/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const obj = {}
    for (let i of nums){
        obj[i] = (obj[i] || 0)+1
    }
    const res = []
    for(let i in obj ){
        if(obj[i]==2){
            res.push(Number(i))
        }
    }
    return res
};