const getLine = (words: string[], maxWidth: number, start: number) => {
    const line: string[] = []
    let i = 0
    let letterCount = 0
    while (letterCount < maxWidth) {
        const w = words[i + start]
        const lineWidth = letterCount + w.length + i
        if (lineWidth > maxWidth) {
            break
        }
        letterCount += w.length
        line.push(w)
        i++
        if (i + start >= words.length) {
            break
        }
    }
    return {
        hasMore: i + start < words.length,
        line,
        wordCount: i,
        letterCount,
    }
}

const justifyLine = (
    line: string[],
    maxWidth: number,
    wordCount: number,
    letterCount: number,
): string => {
    if (wordCount < 2) {
        return alignLeft(line, maxWidth, wordCount, letterCount)
    }

    const totalSpaces = maxWidth - letterCount
    const gaps = wordCount - 1
    let extraSpaces = totalSpaces % gaps
    if (extraSpaces > 0) {
        while (extraSpaces-- > 0) {
            line[extraSpaces] += ' '
        }
    }

    const spacesPerWord = ~~(totalSpaces / gaps)
    return line.join(' '.repeat(spacesPerWord))
}

const alignLeft = (
    line: string[],
    maxWidth: number,
    wordCount: number,
    letterCount: number,
): string => line.join(' ') + ' '.repeat(maxWidth - letterCount - wordCount + 1)

function fullJustify(words: string[], maxWidth: number): string[] {
    const just: string[] = []
    let start = 0
    for (;;) {
        const res = getLine(words, maxWidth, start)
        start += res.wordCount
        const line = res.hasMore
            ? justifyLine(res.line, maxWidth, res.wordCount, res.letterCount)
            : alignLeft(res.line, maxWidth, res.wordCount, res.letterCount)
        just.push(line)
        if (!res.hasMore) {
            break
        }
    }
    return just
}

export { fullJustify, getLine, justifyLine, alignLeft }
