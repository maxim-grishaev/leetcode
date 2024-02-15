// function _arrayManipulationNaive(n: number, queries: number[][]): number {
//     const arr: number[] = new Array(n)
//     for (let i = 0; i < queries.length; i++) {
//         const [s, e, k] = queries[i]
//         for (let opi = s - 1; opi < e; opi++) {
//             arr[opi] = k + (arr[opi] ?? 0)
//         }
//     }
//     // console.log(arr)
//     return arr.reduce((mem, n) => (mem > n ? mem : n), 0)
// }

function arrayManipulation(n: number, queries: number[][]): number {
    const arr: number[] = new Array(n)
    for (let i = 0; i < queries.length; i++) {
        const [s, e, k] = queries[i]
        arr[s - 1] = (arr[s - 1] ?? 0) + k
        arr[e] = (arr[e] ?? 0) - k
    }
    let max = 0
    let sum = 0
    arr.forEach((n) => {
        sum += n ?? 0
        max = Math.max(max, sum)
    })
    return max
}

export { arrayManipulation }
