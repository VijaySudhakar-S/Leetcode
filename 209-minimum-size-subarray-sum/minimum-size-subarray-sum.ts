function minSubArrayLen(target: number, nums: number[]): number {
    let currsum:number = 0
    let minSize:number = Infinity
    let i:number=0
    let j:number=0
    while (j<nums.length){
        currsum += nums[j]
        j++
        while (currsum >= target){
            minSize = Math.min(minSize, j-i)
            currsum -= nums[i]
            i++
        }
    }
    return minSize === Infinity ? 0 : minSize
};