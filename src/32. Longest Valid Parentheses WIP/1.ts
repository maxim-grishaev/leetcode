const OB = '('
// const CB = ')'

export function longestValidParentheses(s: string): number {
    // const counts: number[] = []
    // const pairs: number[] = []
    let count = 0
    let i = 0
    let char = ''
    let closedPairs = 0
    const sequencesFound: number[] = []
    for (; i < s.length; i++) {
        char = s[i]
        if (char === OB) {
            count++
        } else {
            count--

            if (count < 0) {
                //
            }

            if (count >= 0) {
                closedPairs++
            } else if (closedPairs > 0) {
                sequencesFound.push(closedPairs * 2)
                closedPairs = 0
            }
        }
        // pairs.push(closedPairs)
        // counts.push(count)
    }
    sequencesFound.push(closedPairs * 2)

    console.log(s)
    // console.log('pairs', pairs)
    // console.log('counts', counts)
    console.log('sequencesFound', sequencesFound)

    return Math.max(0, ...sequencesFound)
}
