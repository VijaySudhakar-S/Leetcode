function makeEqual(words: string[]): boolean {
    let n = words.length
    if (n == 1) return true
    let str = words.reduce((i,j)=>i+j,"")
    const obj: Record<string, number> = {}
    for (let i of str){
        obj[i] = (obj[i] || 0) + 1
    }
    let values = Object.values(obj)
    for (let j of values){
        if(j%n !== 0) return false
    }
    return true
};