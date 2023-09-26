type Comparator<T> = (a: T, b: T) => number

export const quickSortIter = <T>(arr: T[], compare: Comparator<T>): T[] => {
    const stack: [number, number][] = []
    stack.push([0, arr.length - 1]) // Push the initial range onto the stack

    while (stack.length > 0) {
        const [low, high] = stack.pop()!
        if (low >= high) {
            continue // Skip if the range is empty or contains one element
        }

        const pivotIndex = partition(arr, low, high, compare)

        // Push the left and right subranges onto the stack
        stack.push([low, pivotIndex - 1])
        stack.push([pivotIndex + 1, high])
    }

    return arr
}

const partition = <T>(
    arr: T[],
    low: number,
    high: number,
    compare: Comparator<T>,
): number => {
    const pivot = arr[high]
    let i = low - 1

    for (let j = low; j < high; j++) {
        if (compare(arr[j], pivot) <= 0) {
            i += 1
            swap(arr, i, j)
        }
    }

    swap(arr, i + 1, high)
    return i + 1
}

const swap = <T>(arr: T[], i: number, j: number): void => {
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}
