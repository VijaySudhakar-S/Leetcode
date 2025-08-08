function decrypt(code: number[], k: number): number[] {
    let arr = []
    let n:number = code.length
    if (k < 0){
        code.reverse()
    }
    let m = Math.abs(k)
    for (let i=0;i<n;i++){
        let temp:number = 0
        for (let j=i+1;j<=i+m;j++){
            temp+=code[j%n]
        }
        arr.push(temp)
        temp=0
    }
    if (k < 0){
        return arr.reverse()
    }
    return arr
};