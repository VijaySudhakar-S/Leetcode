function closestTarget(words: string[], target: string, startIndex: number): number {
    const n:number = words.length
    let ans:number = n
    for (let i=0;i<n;i++){
        if(words[i]==target){
            let dis = Math.min(Math.abs(i-startIndex), n - (Math.abs(i-startIndex)))
            ans = Math.min(ans,dis)
        }
    }
    return ans === n ? -1 : ans
};