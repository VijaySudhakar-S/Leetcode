/**
 * @param {string} s
 * @return {number}
 */
var removePalindromeSub = function(s) {
    if(s.split("").reverse().join("")==s) return 1
    return 2
};