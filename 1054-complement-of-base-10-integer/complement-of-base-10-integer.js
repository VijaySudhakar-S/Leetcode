/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function(n) {
    let a = n.toString(2)
    let b = ""
    for(let i of a){
        if(i==0){
            b+="1"
        }else{
            b+="0"
        }
    }
    return parseInt(b,2)
};