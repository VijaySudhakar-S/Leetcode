function minimumAbsDifference(arr: number[]): number[][] {
    arr.sort((a,b)=>a-b)
    let min = Infinity
    let res = []

    for(let i=0 ; i<arr.length-1 ; i++){
        let dif = arr[i+1] - arr[i]
        if( dif < min){
            min = dif
            res = [[arr[i],arr[i+1]]]
        }
        else if(dif === min){
            res.push([arr[i],arr[i+1]])
        }
    }
    return res
};