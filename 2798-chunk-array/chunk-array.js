/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    if(arr.length == 0) return []
    let ans = []
    let temp = []
    for (let i of arr){
        if(temp.length < size){
            temp.push(i)
        }else{
            ans.push(temp)
            temp = [i]
        }
    }
    ans.push(temp)
    return ans
};
