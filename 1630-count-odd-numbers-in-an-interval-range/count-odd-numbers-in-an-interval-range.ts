function countOdds(low: number, high: number): number {
    let diff:number = Math.floor((high-low)/2)
    if(high%2!==0 || low%2!=0){
        return diff+1
    }
    return diff 
};