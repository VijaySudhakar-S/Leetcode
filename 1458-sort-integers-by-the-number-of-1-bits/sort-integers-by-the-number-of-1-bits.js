/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function(arr) {
    const obj = {}
    for(let i of arr){
        let b = i.toString(2)
        let c = b.split("").filter((n)=>n==1).length
        if(!(c in obj)){
            obj[c] = [i]  
        }else{
            obj[c].push(i)
        }
    }
    let sortedKeys = Object.keys(obj).sort((a, b) => Number(a) - Number(b));
    let ans = []
    for(let i of sortedKeys){
        ans = [...ans, ...obj[i].sort((a,b)=>a-b)]
    }
    return ans
};