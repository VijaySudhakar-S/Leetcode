/**
 * @param {string} word
 * @return {number}
 */
var numDifferentIntegers = function(word) {
    let nums = word.match(/\d+/g)
    if(nums == null) return 0
    let set = new Set()
    nums.forEach((n)=>{
        set.add(n.replace(/^0+/,""))
    })
    console.log(nums)
    console.log(set)
    return set.size
};