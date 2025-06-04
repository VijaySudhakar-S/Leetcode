/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
    let i = 0
    let ans = ""
    let t = 0
    while(i<s.length){
        if(t===0){
            ans+=s.slice(i, i + k).split('').reverse().join('');
            t = 1
        }else{
            ans+=s.slice(i, i + k)
            t = 0
        }
        i+=k
    }
    return ans
};