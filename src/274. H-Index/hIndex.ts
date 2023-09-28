function hIndex(citations: number[]): number {
    let h = 0
    for (const c of citations) {
        if (c === 0) {
            continue
        }
        const cq = citations.reduce((acc, n) => (n >= c ? acc + 1 : acc), 0)
        const ch = Math.min(c, cq)
        if (ch > h) {
            h = ch
        }
    }
    return h
}

export { hIndex }
