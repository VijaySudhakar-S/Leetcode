/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    let vow = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'])
    let half = s.length/2
    let i=0
    let j=half
    let a = 0
    let b = 0
    while(i<half){
        if(vow.has(s[i])) a+=1
        if(vow.has(s[j])) b+=1
        i+=1
        j+=1
    }
    return a==b
};