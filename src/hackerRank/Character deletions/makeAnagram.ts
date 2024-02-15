function makeAnagram(a: string, b: string): number {
    const aMap = countItems(a.length, (i) => a.charAt(i))
    const bMap = countItems(b.length, (i) => b.charAt(i))
    let diff = 0
    for (const [c, n] of aMap.entries()) {
        const xn = bMap.get(c) ?? 0
        if (n > xn) {
            diff += n - xn
        }
    }
    for (const [c, n] of bMap.entries()) {
        const xn = aMap.get(c) ?? 0
        if (n > xn) {
            diff += n - xn
        }
    }
    return diff
}

function countItems<T>(ln: number, getKey: (n: number) => T) {
    const m = new Map<T, number>()
    for (let i = 0; i < ln; i++) {
        const c = getKey(i)
        const n = m.get(c) ?? 0
        m.set(c, n + 1)
    }
    return m
}

export { makeAnagram }
