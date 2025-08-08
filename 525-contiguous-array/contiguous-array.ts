function findMaxLength(nums: number[]): number {
    let arr = nums.map((n)=>{
        if(n==0) return -1
        else return 1
    })
    let cursum = 0
    let obj = {}
    obj[0]=-1
    let ans = 0
    for(let i=0;i<arr.length;i++){
        cursum+=arr[i]
        if (!(cursum in obj)){
            obj[cursum] = i
        }else{
            ans = Math.max(ans,i-obj[cursum])
        }
    }
    return ans
};