import { countItems } from "../../lib/countItems";

/**
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 * @returns {string}
 */
function isValid(/**@type {string}*/s) {
    return isValid_(s) ? 'YES' : 'NO'
}

function isValid_(/**@type {string}*/s) {
    // Write your code here
    const countChars = countItems(s.length, i => s.charAt(i));

    /**@type {Map<number, number>}*/
    const countCounts = new Map()
    for (let charCount of countChars.values()) {
        const q = countCounts.get(charCount) ?? 0;
        countCounts.set(charCount, q + 1);
        if (countCounts.size > 2) {
            return false;
        }
    }
    if (countCounts.size === 1) {
        return true
    }
    const [a, b] = Array.from(countCounts.entries())
    const more = a[0] > b[0] ? a : b
    const less = a[0] < b[0] ? a : b
    if (more[1] === 1) {
        return more[0] - less[0] === 1;
    }
    return false
}

export { isValid }
