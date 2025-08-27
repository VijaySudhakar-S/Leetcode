function numberOfAlternatingGroups(colors: number[]): number {
    let count:number = 0
    let n:number = colors.length
    for(let i=1;i<n-1;i++){
        if (colors[i-1] === colors[i+1] && colors[i-1] !== colors[i]) count++
    }
    if (colors[n-2] !== colors[n-1] && colors[0] === colors[n-2]) count++
    if (colors[n-1] === colors[1] && colors[1] != colors[0]) count++
    return count
};