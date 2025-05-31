/**
 * @param {string} s
 * @param {number[]} distance
 * @return {boolean}
 */
var checkDistances = function(s, distance) {
    let d = {}
    for (let i=0;i<s.length;i++){
        if(!(s[i] in d)){
            d[s[i]] = i
        }else{
            d[s[i]] = Math.abs(i - d[s[i]])-1
        }
    }
    for(let i in d){
        curr = i.charCodeAt(0) - "a".charCodeAt(0)
        if(distance[curr] != d[i] ){
            return false
        }
    }
    return true
};