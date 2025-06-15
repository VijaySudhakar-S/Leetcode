/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function(s) {
    let a = 0
    let b = s.length
    const arr = []
    for(let i of s){
        if(i == "I"){
            arr.push(a)
            a+=1
        }else{
            arr.push(b)
            b-=1
        }
    }
    arr.push(b)
    return arr
};