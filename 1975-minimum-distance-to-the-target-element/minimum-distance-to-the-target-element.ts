function getMinDistance(nums: number[], target: number, start: number): number {
    let m = Infinity
    for (let i = 0; i < nums.length; i++){
        if (nums[i] == target){
            let n = Math.abs(i-start)
            if (n<m){
                m = n
            }
        }
    }
    return m
};