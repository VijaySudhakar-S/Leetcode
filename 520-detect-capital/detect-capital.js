/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    if (word == word.toUpperCase()){
        return true
    }else if(word == word.toLowerCase()){
        return true
    }else if(word == word.slice(0,1).toUpperCase()+word.slice(1).toLowerCase()){
        return true
    }
    return false
};