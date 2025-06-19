/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
    let n = ""
    for (let i=0;i<s.length;i++){
        n+=(s.charCodeAt(i)-96).toString()
    }
    let j = 1
    while(j<=k){
        let temp = 0
        for(let i of n){
            temp+=Number(i)
        }
        n = temp.toString()
        j+=1
    }
    return Number(n)
};