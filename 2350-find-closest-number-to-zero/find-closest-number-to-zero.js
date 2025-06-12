/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let num = Infinity
    let dis = Infinity
    for(let i of nums){
        let d = Math.abs(i)
        if(d<=dis){
            dis = d
            if(num==dis){
                num = Math.max(num,i)
            }else{
                num = i
            }
        }
    }
    return num
};