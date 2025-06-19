/**
 * @param {number} num
 * @return {number}
 */
var countEven = function(num) {
    let ans = 0
    for(let i=1;i<=num;i++){
        if(i<10 && i%2==0) ans+=1
        else{
            let n = i.toString()
            let sum = n.split("").reduce((a,b)=>a+Number(b),0)
            if(sum%2==0) ans+=1
        }
    }
    return ans
};