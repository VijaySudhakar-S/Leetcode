/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function(s) {
    let arr = [];
    let count = 1; 

    for (let i = 1; i < s.length; i++) {
        if (s[i] == s[i - 1]) {
            count += 1;
        } else {
            arr.push(count);
            count = 1;
        }
    }

    arr.push(count);

    let ans = 0;
    for (let i = 1; i < arr.length; i++) {
        ans += Math.min(arr[i], arr[i - 1]);
    }

    return ans;
};
