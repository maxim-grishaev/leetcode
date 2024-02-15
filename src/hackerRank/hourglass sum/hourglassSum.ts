/*
 * Complete the 'hourglassSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function hourglassSum(arr: number[][]): number {
    let maxSum = -Infinity
    for (let i = 0; i < arr.length - 2; i++) {
        const ln = arr[i].length
        for (let j = 0; j < ln - 2; j++) {
            const hs = getHourglassSum(arr, i, j)
            maxSum = Math.max(hs, maxSum)
        }
    }
    return maxSum
}

function getHourglassSum(arr: number[][], i: number, j: number) {
    return (
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2]
    )
}

export { hourglassSum }
