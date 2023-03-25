const CAP = Math.pow(2, 31)
const MAX = CAP - 1
const MIN = -CAP

const dgtMap: Record<string, number> = {
    '0': 0,
    '1': 1,
    '2': 2,
    '3': 3,
    '4': 4,
    '5': 5,
    '6': 6,
    '7': 7,
    '8': 8,
    '9': 9,
}
const isDigit = (char: string) => char in dgtMap
const isSpace = (char: string) => char === ' '
const isZero = (char: string) => char === '0'

// const ignoreWhile = (
//     continueIf: (char: string) => boolean,
//     i: number,
//     str: string,
// ) => {
//     while (continueIf(str.charAt(i))) {
//         i++
//     }
//     return i
// }

export const myAtoi = (str: string): number => {
    let i = 0
    while (isSpace(str.charAt(i))) {
        i++
    }

    const firstChar = str.charAt(i)
    const sign = firstChar === '-' ? -1 : 1
    i += firstChar === '-' || firstChar === '+' ? 1 : 0

    if (!isDigit(str.charAt(i))) {
        return 0
    }

    while (isZero(str.charAt(i))) {
        i++
    }

    let num = 0
    while (isDigit(str.charAt(i))) {
        num = num * 10 + +str.charAt(i)
        if (num >= MAX) {
            break
        }
        i++
    }

    num *= sign
    return num > MAX ? MAX : num < MIN ? MIN : num
}
