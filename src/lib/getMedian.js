
export function getMedianBySorted(/**@type {number[]}*/arr) {
    if (arr.length === 0) {
        throw new Error('Array is empty');
    };
    const ln = arr.length;
    if (ln % 2 === 1) {
        return arr[Math.floor(ln / 2)];
    }
    const midHi = ln / 2;
    return (arr[midHi] + arr[midHi - 1]) / 2;
}
