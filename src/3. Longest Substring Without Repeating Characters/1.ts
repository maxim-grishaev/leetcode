const hasDuplicates = (s: string) => {
    const seen: Record<string, boolean> = {}
    let char = ''
    for (let i = 0; i < s.length; i++) {
        char = s[i]
        if (seen[char]) {
            return true
        }
        seen[char] = true
    }
    return false
}

export const lengthOfLongestSubstring = (s: string): number => {
    const sln = s.length
    if (sln < 2) {
        return sln
    }

    const maxDiff = new Set(s.split('')).size
    if (maxDiff === sln && !hasDuplicates(s)) {
        return sln
    }

    let ln = Math.min(maxDiff, sln - 1)
    while (ln > 1) {
        for (let i = 0; i < sln - ln + 1; i++) {
            if (!hasDuplicates(s.slice(i, i + ln))) {
                return ln
            }
        }
        ln -= 1
    }
    return 1
}
