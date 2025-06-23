/**
 * @param {string} sentence
 * @return {number}
 */
var countValidWords = function(sentence) {
    let ans = 0;
    let words = sentence.split(" ").filter(w => w != "");
    let answords = [];
    let punch = ['!', ".", ','];

    for (let w of words) {
        if (w.match(/\d/) == null) { 

            let punchcount = w.split("").filter(i => punch.includes(i)).length;
            let dashcount = w.split("").filter(i => i == "-").length;

            if (dashcount == 1) {
                let idx = w.indexOf("-");
                if (
                    w[0] != "-" &&
                    w[w.length - 1] != "-" &&
                    idx > 0 && idx < w.length - 1 &&
                    /[a-z]/.test(w[idx - 1]) &&
                    /[a-z]/.test(w[idx + 1])
                ) {
                    if (
                        punchcount == 1 &&
                        punch.includes(w[w.length - 1]) &&
                        w.slice(0, -1).split("").filter(i => punch.includes(i)).length == 0
                    ) {
                        ans += 1;
                        answords.push(w);
                    } else if (punchcount == 0) {
                        ans += 1;
                        answords.push(w);
                    }
                }
            } else if (dashcount == 0) {
                if (
                    punchcount == 1 &&
                    punch.includes(w[w.length - 1]) &&
                    w.slice(0, -1).split("").filter(i => punch.includes(i)).length == 0
                ) {
                    ans += 1;
                    answords.push(w);
                } else if (punchcount == 0) {
                    ans += 1;
                    answords.push(w);
                }
            }
        }
    }

    console.log(answords);
    return ans;
};
