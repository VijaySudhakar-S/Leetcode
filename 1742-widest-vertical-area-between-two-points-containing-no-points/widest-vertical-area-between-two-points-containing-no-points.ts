function maxWidthOfVerticalArea(points: number[][]): number {
    let arr = []
    for (let i of points){
        arr.push(i[0])
    }
    arr.sort((a,b) => a-b)
    let max = 0
    for( let j=0; j< arr.length-1;j++){
        max = Math.max(max,arr[j+1]-arr[j])
    }
    return max
};