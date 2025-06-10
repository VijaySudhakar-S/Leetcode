/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    function count(l){
        let c = 0
        for(let i of text){
            if(i==l){
                c+=1
            }
        }
        return c
    }
    let a = Math.min(count("a"),count("b"),count("n"))
    let b = Math.min(count("l"),count("o"))
    return Math.min(Math.floor(b/2),a)
};