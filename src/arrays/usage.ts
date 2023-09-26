import { sortParts } from './partitions'
// import { quickSort } from './quickSort'
import { quickSortIter } from './quickSortIter'
import { sortAVL } from './withAVL'

const map = new Map()
const ARRS: Record<string, number[]> = {
    // 'short sorted': [1, 2, 3, 4, 5],
    // 'short unsorted': [5, 3, 5, 78, 344, -1],
    // 'has NaN': [99, NaN, Infinity, -Infinity, 1, 0],
    '10k random': Array.from({ length: 100000 }, () => Math.random()),
    // '10k uninit': Array.from({ length: 10000 }),
    '10k zeros': Array.from({ length: 10000 }, () => 0),
}
const SORT_FNS = [
    sortParts,
    // quickSort,
    quickSortIter,
    sortAVL,
]

Object.entries(ARRS).forEach(([arrName, arr], i) => {
    const res: Record<string, number> = {}
    SORT_FNS.forEach((sort) => {
        const fnName = sort.name
        performance.mark('start')
        console.log(
            sort.name,
            i,
            sort(arr.concat([]), (x, y) => x - y),
        )
        performance.mark('end')

        const { duration } = performance.measure(fnName, 'start', 'end')
        res[fnName] = duration
    })

    map.set(arrName, res)
})

console.log(map)
