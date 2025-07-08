/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let s = salary.sort((a,b)=>a-b)
    let sum = s.reduce((a,b)=>a+b,0) - s[0] - s[s.length-1]
    return sum/(s.length-2)
};