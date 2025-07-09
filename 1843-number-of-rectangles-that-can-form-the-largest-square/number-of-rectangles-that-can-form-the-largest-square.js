/**
 * @param {number[][]} rectangles
 * @return {number}
 */
var countGoodRectangles = function(rectangles) {
    let min = []
    for (let [i,j] of rectangles){
        min.push(Math.min(i,j))
    }
    max = Math.max(...min)
    count = 0
    for(let n of min){
        if(n==max) count++
    }
    return count
};