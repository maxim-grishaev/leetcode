export function isNumber(s: string): boolean {
    return s.includes('Infinity') ? false : +s === +s
}
