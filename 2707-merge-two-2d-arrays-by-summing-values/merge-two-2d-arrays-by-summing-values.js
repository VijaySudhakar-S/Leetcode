/**
 * @param {number[][]} nums1
 * @param {number[][]} nums2
 * @return {number[][]}
 */
var mergeArrays = function(nums1, nums2) {
    const obj = {}
    let x = nums1.concat(nums2)
    for(let [i,j] of x){
        obj[i] = (obj[i] || 0) + j
    }
    let arr = []
    for (let i in obj){
        arr.push([parseInt(i),obj[i]])
    }
    return arr
};