function maximumStrongPairXor(nums: number[]): number {
    let n:number = nums.length
    let result = 0
    for (let i=0;i<n;i++){
        for(let j=i;j<n;j++){
            if(Math.abs(nums[i]-nums[j]) <= Math.min(nums[i],nums[j])){
            result = Math.max(result,nums[i]^nums[j])
            }
        }
    }
    return result
};