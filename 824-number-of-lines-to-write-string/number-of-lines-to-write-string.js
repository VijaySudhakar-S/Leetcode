/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function(widths, s) {
    let count = 1
    let temp = 0
    for (let i=0;i<s.length;i++){
        let w = widths[s.charCodeAt(i)-97]
        if(w+temp > 100){
            count+=1
            temp = 0
        }
        temp+=w
    }
    return [count,temp]
};