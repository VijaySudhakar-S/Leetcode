/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const arr = []
    for(let i=0;i<prices.length-1;i++){
        for(let j=i+1;j<prices.length;j++){
            if (prices[i] >= prices[j]){
                arr.push(prices[i]-prices[j])
                break
            }
        }
        if(arr.length != i+1){
            arr.push(prices[i])
        }
    }
    arr.push(prices[prices.length-1])
    return arr
};