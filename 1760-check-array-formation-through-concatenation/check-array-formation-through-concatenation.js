/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function(arr, pieces) {
    for(let a of pieces){
        if(a.length == 1 && !arr.includes(a[0])){
            return false
        }else{
            i = arr.indexOf(a[0])
            for(let j=0;j<a.length;j++){
                if(a[j] != arr[i]){
                    return false
                }
                i+=1
            }
        }
    }
    return true
};
