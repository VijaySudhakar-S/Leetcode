/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function(n) {
    let arr = n.toString().split("")
    let add = true
    let ans = arr.reduce((a,b)=>{
        if(add){
            a+=Number(b)
            add = false
        }else{
            a-=Number(b)
            add = true
        }
        return a
    },0)
    return ans
};