function maxProduct(n: number): number {
    let str = n.toString().split("")
    let numbers = str.map(n=>parseInt(n))
    let sort = numbers.sort((a,b)=>b-a)
    return sort[0]*sort[1]
};