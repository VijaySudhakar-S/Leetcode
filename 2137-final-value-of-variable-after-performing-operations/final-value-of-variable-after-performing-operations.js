/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x=0
    for(let i of operations){
       if("++X"===i || "X++"===i ) x+=1
       else x-=1
    }
    return x
};