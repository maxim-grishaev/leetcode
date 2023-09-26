export const countMap = <T>(arr: T[]) => {
    const map = new Map<T, number>()
    for (const v of arr) {
        const count = !map.has(v) ? 0 : map.get(v) ?? 0
        map.set(v, count + 1)
    }
    return map
}
