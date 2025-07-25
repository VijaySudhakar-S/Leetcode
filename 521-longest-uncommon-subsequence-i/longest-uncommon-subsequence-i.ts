function findLUSlength(a: string, b: string): number {
    if(a===b) return -1
    let l1:number = a.length
    let l2:number = b.length
    if(l1>l2) return l1
    return l2
};