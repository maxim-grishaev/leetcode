export const sortParts = <T>(
    arr: T[],
    compare: (x: T, y: T) => number,
): T[] => {
    if (arr.length < 2) {
        return arr
    }
    const biggerThan: T[] = []
    const lessThan: T[] = []
    // '[Invariant] pivot is undefined'
    const pivot = arr.pop()!
    const middle: T[] = [pivot]
    let i = arr.length
    while (i > 0) {
        i -= 1
        const v = arr.pop()!
        const compareResult = compare(v, pivot)
        if (compareResult > 0) {
            biggerThan.push(v)
            continue
        }
        if (compareResult < 0) {
            lessThan.push(v)
            continue
        }
        middle.push(v)
    }
    return sortParts(lessThan, compare).concat(
        middle,
        sortParts(biggerThan, compare),
    )
}
