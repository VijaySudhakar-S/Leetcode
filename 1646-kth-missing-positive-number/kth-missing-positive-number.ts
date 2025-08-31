function findKthPositive(arr: number[], k: number): number {
    let missing = []
    let nums = new Set([...arr])
    for (let i=1 ; i<= arr[arr.length-1]+k ; i++){
        if(!(nums.has(i))) missing.push(i)
    }
    return missing[k-1]
};