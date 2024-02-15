/**
 * @template T
 * @param {T[]} unsorted
 * @param {(a: T, b: T) => number} sortFn
 * @returns {T[]}
 */
function mergeSort(unsorted, sortFn) {
    if (unsorted.length > 1) {
        const mid = Math.floor(unsorted.length / 2);  // Finding the mid of the array
        const left = mergeSort(unsorted.slice(0, mid), sortFn)  // Dividing the array elements
        const right = mergeSort(unsorted.slice(mid), sortFn)  // into 2 halves

        let iLeft = 0;
        let iRight = 0;
        let i = 0

        // data to temp arrays L[] and R[]
        while (iLeft < left.length && iRight < right.length) {
            if (sortFn(left[iLeft], right[iRight]) < 0) {
                unsorted[i] = left[iLeft]
                iLeft += 1
            } else {
                unsorted[i] = right[iRight]
                iRight += 1
            }
            i += 1
        }
        // Checking if any element was left
        while (iLeft < left.length) {
            unsorted[i] = left[iLeft]
            iLeft += 1
            i += 1
        }
        while (iRight < right.length) {
            unsorted[i] = right[iRight]
            iRight += 1
            i += 1
        }
    }
    return unsorted
}

export { mergeSort }
