const swap = <T>(arr: T[], i: number, j: number) => {
    const tmp = arr[i]
    arr[i] = arr[j]
    arr[j] = tmp
}

const partition = <T>(
    arr: T[],
    low: number,
    high: number,
    compare: (x: T, y: T) => number,
) => {
    const pivot = arr[high]
    let i = low - 1
    for (let j = low; j < high; j += 1) {
        if (compare(arr[j], pivot) < 0) {
            i += 1
            swap(arr, i, j)
        }
    }
    swap(arr, i + 1, high)
    return i + 1
}

export const quickSort = <T>(arr: T[], compare: (x: T, y: T) => number) => {
    const quickSortRecursive = (arr: T[], low: number, high: number) => {
        if (low < high) {
            const pi = partition(arr, low, high, compare)
            quickSortRecursive(arr, low, pi - 1)
            quickSortRecursive(arr, pi + 1, high)
        }
        return arr
    }

    return quickSortRecursive(arr, 0, arr.length - 1)
}
