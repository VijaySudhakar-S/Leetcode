function makeSmallestPalindrome(s: string): string {
    let n = s.length
    let i = 0
    let j = n-1
    let arr = s.split("")
    while(i<j){
        if(arr[i] < arr[j]) arr[j] = arr[i]
        else arr[i] = arr[j]
        i++
        j--
    }
    return arr.join("")
};