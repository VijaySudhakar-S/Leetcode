/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */
var shortestToChar = function(s, c) {
    const arr = []
    for (let i=0;i<s.length;i++){
        if(s[i]===c){
            arr.push(i)
        }
    }
    const result = []
     for (let i=0;i<s.length;i++){
        let miin = []
        for(let j of arr){
            miin.push(Math.abs(i-j))
        }
        result.push(Math.min(...miin))
    }

    return result
};