/**
 * @param {number[]} batteryPercentages
 * @return {number}
 */
var countTestedDevices = function(batteryPercentages) {
    let ans = 0
    for (let i=0;i<batteryPercentages.length;i++){
        if (batteryPercentages[i] > 0){
            ans+=1
            for(let j=i+1;j<batteryPercentages.length;j++){
                if(batteryPercentages[j]>0){
                    batteryPercentages[j]-=1
                }
            }
        }
    }
    if(batteryPercentages[batteryPercentages.legth-1] > 0){
        ans+=1
    }
    return ans
};