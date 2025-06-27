/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let s = apple.reduce((a,b)=>a+b,0)
    let cap = capacity.sort((a,b)=>b-a)
    let cursum = 0
    let count = 0
    for(let i of cap){
        cursum+=i
        count+=1
        if(cursum>=s){
            return count
        }
    }
};