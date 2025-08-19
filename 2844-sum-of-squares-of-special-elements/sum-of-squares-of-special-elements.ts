function sumOfSquares(nums: number[]): number {
    let n = nums.length
    let result = 0
    for(let i=1 ; i<=n ;i++){
        if (n % i == 0){
            result+=(nums[i-1]**2)
        }
    }
    return result
};