/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let a = 0
    let b = 0
    for (let i of moves){
        if(i=="L") a-=1,b-=1
        else if(i=="R") a+=1, b+=1
        else a-=1, b+=1
    }
    return Math.max(Math.abs(a),Math.abs(b))
};