import { countItems } from './countItems'

/**
 * Check if two strings are anagrams.
 *
 * @param {string} s1 - The first string.
 * @param {string} s2 - The second string.
 * @returns {boolean} `true` if `s1` and `s2` are anagrams, `false` otherwise.
 */
function isAnagram(s1, s2) {
    if (s1.length !== s2.length) {
        return false
    }
    if (s1 === s2) {
        return true
    }
    const m = countItems(s2.length, (i) => s2.charAt(i))
    for (let i = 0; i < s1.length; i++) {
        const c = s1.charAt(i)
        const n = m.get(c) ?? 0
        if (n === 0) {
            return false
        }
        m.set(c, n - 1)
    }
    return true
}

export { isAnagram }
