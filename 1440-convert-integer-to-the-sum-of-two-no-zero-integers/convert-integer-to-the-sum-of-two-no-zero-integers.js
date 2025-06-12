/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    let a = 1
    let b = n-1
    while (true){
        let a1 = a.toString()
        let b1 = b.toString()
        if(!a1.includes("0") && !b1.includes("0")){
            return [a, b]
        }
        a+=1
        b-=1
    }
};