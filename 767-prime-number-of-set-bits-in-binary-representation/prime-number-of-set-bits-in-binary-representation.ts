function countPrimeSetBits(left: number, right: number): number {
    const obj:Record<number,boolean> = {}
    let primeCount = 0
    const isPrime = (n) =>{
        if (n<=1) return false
        for (let i=2;i<Math.floor(Math.sqrt(n))+1;i++){
            if(n%i == 0) return false
        }
        return true
    }
    for(let i=left;i<=right;i++){
        let bin = i.toString(2).split("")
        let bits = bin.filter((b)=>b=="1").length
        if(bits in obj){
            if(obj[bits]) primeCount+=1
        }
        else if (!(bits in obj)){
            let checkPrime = isPrime(bits)
            if(checkPrime){
                primeCount+=1
                obj[bits] = true
            }
        }
    }
    return primeCount
};