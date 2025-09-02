function smallestNumber(n: number): number {
    for(let i=n; i<=Infinity;i++){
        let s = i.toString(2)
        if(!(s.includes("0"))) return i
    }
};