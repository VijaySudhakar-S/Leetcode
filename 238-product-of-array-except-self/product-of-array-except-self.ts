function productExceptSelf(nums: number[]): number[] {
    let pro:number = 1
    let zero:number = 0
    let arr = []
    for (let i of nums){
        if(i==0) zero+=1
        else pro*=i
    }
    for (let i of nums){
        if (zero>1) arr.push(0)
        else if (zero==1){
            if (i==0) arr.push(pro)
            else arr.push(0)
        }
        else arr.push(Math.floor(pro/i))
    }
    return arr
};