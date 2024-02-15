/**
 *
 * @template T
 * @param {number} ln
 * @param {(n: number) => T} getKey
 * @returns
 */
function countItems(ln, getKey) {
    /** @type Map<T, number> */
    const m = new Map()
    for (let i = 0; i < ln; i++) {
        const c = getKey(i)
        const n = m.get(c) ?? 0
        m.set(c, n + 1)
    }
    return m
}

export { countItems }
