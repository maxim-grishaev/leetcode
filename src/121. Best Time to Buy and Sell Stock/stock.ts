function maxProfit(p: number[]): number {
    if (p.length < 2) {
        return 0
    }
    let lo = 0
    const li = p.length - 1
    let hi = li
    let profit = 0
    while (lo < li) {
        if (p[hi] - p[lo] > profit) {
            profit = p[hi] - p[lo]
        }
        hi--
        if (hi === lo) {
            lo++
            hi = li
        }
    }
    return profit
}

export { maxProfit }
