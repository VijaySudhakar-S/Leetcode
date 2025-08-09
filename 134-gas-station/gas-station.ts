function canCompleteCircuit(gas: number[], cost: number[]): number {
    let sumgas = 0
    let sumcost = 0
    for(let i=0;i<gas.length;i++){
        sumgas+=gas[i]
        sumcost+=cost[i]
    }
    if(sumgas<sumcost) return -1
    let p = 0
    let s = 0
    for(let i=0;i<gas.length;i++){
        p+=gas[i]
        p-=cost[i]
        if(p<0){
            p=0
            s=i+1
        }
    }
    return s
};